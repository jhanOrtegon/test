import React, { useState } from 'react';
import { Grid, Input, Card, Button, Text } from '@nextui-org/react';
import { getUser } from '@/services/getUser';

const Home = () => {

    const [data, setData] = useState();
    return(
        <Grid css={{width:'50%', margin:'10vh auto'}}>
            <Card css={{ mw: '530px' }}>

                <Card.Header css={{justifyContent:'center'}}>
                    <Text
                        h1
                        size={40}
                        css={{textGradient: '45deg, $blue600 -20%, $pink600 50%',margin:0}}
                        weight="bold"
                    >
                      EL MAS CAPITO
                    </Text>
                </Card.Header>

                <Card.Divider />

                <Card.Body >
                    <Input
                        css={{mb:'20px'}}
                        rounded
                        bordered
                        label="nombre"
                        placeholder="nombre"
                        color="error"
                        onBlur={()=>{
                            console.log('blur');
                            getUser().then(e=> setData(e?.data));
                        }}
                    />
            
                    <Input
                        css={{mb:'40px'}}
                        rounded
                        bordered
                        label="apellido"
                        placeholder="apellido"
                        color="primary"
                    />

                    <Button color={'error'}>Enviar</Button>

                </Card.Body>

            </Card>

            <Card css={{mt:'50px'}}>
                {JSON.stringify(data)}
            </Card>
        </Grid>
    );
};

export default Home;
