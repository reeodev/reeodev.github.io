import '@mantine/core/styles.css';

import BoringAvator from "boring-avatars";

import TypeIt from "typeit-react";
import { useRouter } from 'next/router'
import { UnstyledButton, Text, Space, Grid, Card, Avatar, Group, Paper, MantineProvider } from '@mantine/core';
import { IconBook2, IconBrandReact, IconBrandHtml5, IconBrandCss3, IconBrandJavascript } from '@tabler/icons';

function HomePage() {
    const router = useRouter();

    return (
        <MantineProvider defaultColorScheme="auto">
            <Text
                fz={110}
                ta="center"
                variant="gradient"
                gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
            >
                Reeodev
            </Text>
            <Text fz={24} ta="center" mt={-24}>
                <TypeIt
                    options={{
                        strings: ["Your site design building helper :)"],
                        speed: 80,
                        loop: true,
                        startDelay: 1250,
                        loopDelay: 2250,
                        nextStringDelay: 4000,
                        waitUntilVisible: true,
                    }}
                />
            </Text>

            <Space h="md" />

            <Grid>
                <Grid.Col span={{ base: 12, md: 6 }}>

                    <Card shadow="sm" p="lg" radius="md" style={{ backgroundColor: "#3b3b3b", color: "#fcf0f0" }}>

                        <Group align="center">
                            <Avatar color="blue">
                                <IconBook2 size={24} />
                            </Avatar>
                            <Text fz="lg" fw={600}>Ready to use</Text>
                        </Group>

                        
                        <Space h="lg" />
                        <Text fz={16}>
                            Up to date resources and website that may enhance your working efficiency and save your time!
                        </Text>

                    </Card>

                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 6 }}>

                    <Grid>
                        {[
                            { icon: <IconBrandReact />, title: "React", color: "blue", href: "/resources/react/React/reactCss" },
                            { icon: <IconBrandHtml5 />, title: "HTML", color: "red", href: "/resources/html/animations" },
                            { icon: <IconBrandCss3 />, title: "CSS", color: "indigo", href: "/resources/css/fonts" },
                            { icon: <IconBrandJavascript />, title: "JS", color: "yellow", href: "/resources/javascript/javascript_utili" }
                            // <IconBook/>
                        ]
                            .map((v, i) => (
                                <Grid.Col span={{ base: 6, md: 6 }} key={i}>
                                    <Paper shadow="sm" p="lg" radius="md" style={{ backgroundColor: "#3b3b3b" }}>
                                        <UnstyledButton onClick={() => router.push(v.href)}>
                                            <Group p="center">
                                                <Avatar variant="filled" fz={36} color={v.color}>
                                                    {v.icon}
                                                </Avatar>
                                                <Text fz={16} color="#fcf0f0"> {v.title} </Text>
                                            </Group>
                                        </UnstyledButton>
                                    </Paper>
                                </Grid.Col>
                            ))
                        }
                    </Grid>

                </Grid.Col>
            </Grid>

            <Space h="md" />
            <Space h="md" />

            <Grid mt={128}>

                <Grid.Col span={{ base: 12, md: 6 }}>
                    <Text c="dimmed">
                        References
                    </Text>

                    <Text fz={30}>
                        Over <Text span c="blue" inherit fz={48}>500+</Text> related libraries / sites covered
                    </Text>

                    <Text fz={18} c="dimmed" mt={32}>
                        Links from javascript, react, vue, css, design and more, up to date tools to enhance your working efficiency and save your time.
                    </Text>
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 6 }}>
                    <Group justify='center'>
                        <BoringAvator
                            size={260}
                            name="Reemo Mitchell"
                            variant="beam"
                            colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
                        />
                    </Group>
                </Grid.Col>

            </Grid>

        </MantineProvider>
    )
}

export default HomePage
