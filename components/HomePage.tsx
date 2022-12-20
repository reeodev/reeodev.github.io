import { Text, Space, Grid, Card, Avatar, Group } from '@mantine/core';
import { IconBook2, IconBrandReact, IconBrandHtml5, IconBrandCss3, IconBrandJavascript, IconBook } from '@tabler/icons';

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
        <Text size={16} align="center">
            Your site design building helper :)
        </Text>

        <Space h="md" />

        <Grid>
            <Grid.Col md={6}>
                
                <Card shadow="sm" p="lg" radius="md" withBorder>

                    <Group align="center">
                        <Avatar color="blue">
                            <IconBook2 size={24} />
                        </Avatar>
                        <Text size="lg" weight={600}>Ready to use</Text>
                    </Group>

                    <Space h="md" />
                    <Text size={16}>
                        Up to date resources and website that may enhance your working efficiency and save your time!
                    </Text>

                </Card>

            </Grid.Col>

            <Grid.Col md={6}>

                <Grid>
                {   [   
                        <IconBrandReact/>, 
                        <IconBrandHtml5/>, 
                        <IconBrandCss3/>, 
                        <IconBrandJavascript/>,
                        <IconBook/>
                    ]   
                    .map( (v,i) => (
                    <Grid.Col span={4} key={i}>
                        <Card shadow="sm" p="lg" radius="md"> 
                            <Group position="center">
                            <Avatar variant="filled" size={36}> 
                            {v}
                            </Avatar>
                            </Group>
                        </Card> 
                    </Grid.Col>
                    ))
                }
                </Grid>

            </Grid.Col>
        </Grid>

        </>
    )
}
    
export default HomePage
