import { Text, Space, Grid, Card } from '@mantine/core';

function HomePage(){
    return (
        <>
        <Text 
            size={52} 
            align="center"
            variant="gradient"
            gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
        >
            Reeodev
        </Text>
        <Text size={16} align="center">Your site building helper</Text>

        <Space h="md" />

        <Grid>
            <Grid.Col md={6}>
                
                <Card shadow="sm" p="lg" radius="md" withBorder>
                    <Text>Ready to use</Text>
                </Card>

            </Grid.Col>
            <Grid.Col md={6}>

                <Grid>
                { [1,1,1,1,1,1].map( v => <Grid.Col md={4}> <Card shadow="sm" p="lg" radius="md" withBorder>{v}</Card> </Grid.Col>)}
                </Grid>

            </Grid.Col>
        </Grid>


        </>
    )
}
    
export default HomePage
