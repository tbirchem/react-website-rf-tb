import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import _ from "lodash";
import {
    Button,
    Card,
    Image,
    Placeholder,
    Header,
    Icon,
    Modal,
}
    from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import '../../App.css'
import "./Styles.css";


const cards = [
    {
        id: 1,
        avatar:
            "https://images.unsplash.com/photo-1525268771113-32d9e9021a97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGluayUyMGJhbGxvbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
        header: "Girl",
    },
    {
        id: 2,
        avatar:
            "https://images.unsplash.com/photo-1499781749692-e8274262c718?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZSUyMGJhbGxvbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        header: "Boy",
    },
];

const Cut = () => {
    const [loading] = useState(false);
    const [voteForA, setVoteForA] = useState(0);
    const [voteForB, setVoteForB] = useState(0);
    const [voted, setVoted] = useState(false);
    const [open, setOpen] = useState(false);
    const [openVoted, setOpenVoted] = useState(false);

    // const handleLoadingClick = () => {
    //     setLoading(true);
    //
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 3000);
    // };

    const submitVote = () => {
        axios
            .post("https://62c91194d9ead251e8b7143e.mockapi.io/vote", {
                partyA: voteForA,
                partyB: voteForB,
            })
            .then(
                (response) => {
                    console.log(response);
                },
                (error) => {
                    console.log(error);
                }
            );
    };

    return (
        <>
            {/*  <Button loading={loading} onClick={handleLoadingClick} primary>*/}
            {/*  Simulate loading*/}
            {/*</Button>*/}
            {/*  <div>*/}
            {/*  {voteForA} - {voteForB}*/}
            {/*  </div>*/}
            <div className=" justify-center overflow-hidden bg-white-50 py-8 lg:py-12">
                <div
                    className="relative w-full bg-white px-6 py-12 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:mx-auto md:max-w-3xl lg:max-w-4xl lg:pt-16 lg:pb-28">
                    <div className="mx-auto max-w-prose lg:text-lg">
                    </div>
                    <div className="prose prose-slate mx-auto mt-8 lg:prose-lg">
                        <h1 className="bg-clip-text text-transparent from-blue-300 to-pink-300 bg-gradient-to-r">  What Will the Gender Be!?</h1>
                        <Card.Group doubling itemsPerRow={2} stackable>
                            {_.map(cards, (card) => (
                                <Card key={card.header}>
                                    {loading ? (
                                        <Placeholder>
                                            <Placeholder.Image square />
                                        </Placeholder>
                                    ) : (
                                        <Image src={card.avatar} />
                                    )}

                                    <Card.Content>
                                        {loading ? (
                                            <Placeholder>
                                                <Placeholder.Header>
                                                    <Placeholder.Line length="very short" />
                                                    <Placeholder.Line length="very short" />
                                                </Placeholder.Header>
                                            </Placeholder>
                                        ) : (
                                            <>
                                                <Card.Header>{card.header}</Card.Header>
                                            </>
                                        )}
                                    </Card.Content>

                                    <Card.Content extra>
                                        <Button
                                            disabled={voted}
                                            onClick={() => [
                                                card.id === 1
                                                    ? setVoteForA(voteForA + 1)
                                                    : setVoteForB(voteForB + 1),
                                                setVoted(true),
                                                setOpen(true),
                                            ]}
                                            primary
                                        >
                                            Vote
                                        </Button>
                                        <Button
                                            disabled={
                                                (card.id === 1 && voteForA <= 0) ||
                                                (card.id === 2 && voteForB <= 0)
                                            }
                                            onClick={() => [
                                                card.id === 1
                                                    ? setVoteForA(voteForA - 1)
                                                    : setVoteForB(voteForB - 1),
                                                setVoted(false),
                                            ]}
                                        >
                                            Unvote
                                        </Button>
                                    </Card.Content>
                                </Card>
                            ))}
                        </Card.Group>
                        <Modal
                            basic
                            onClose={() => setOpen(false)}
                            onOpen={() => setOpen(true)}
                            open={open}
                            size="small"
                            // trigger={<Button>Basic Modal</Button>}
                        >
                            <Header icon>
                                <Icon name="archive" />
                                You are about submit your result!
                            </Header>
                            <Modal.Content>
                                <p>Are you sure this is the option you want?</p>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button basic color="red" inverted onClick={() => setOpen(false)}>
                                    <Icon name="remove" /> No
                                </Button>
                                <Button
                                    color="green"
                                    inverted
                                    onClick={() => [setOpen(false), submitVote(), setOpenVoted(true)]}
                                >
                                    <Icon name="checkmark" /> Yes
                                </Button>
                            </Modal.Actions>
                        </Modal>
                        <Modal
                            basic
                            onClose={() => setOpenVoted(false)}
                            onOpen={() => setOpenVoted(true)}
                            open={openVoted}
                            size="small"
                            // trigger={<Button>Basic Modal</Button>}
                        >
                            <Header icon>
                                <Icon name="archive" />
                                You have voted!
                            </Header>
                            <Modal.Content>
                                <h4>Thanks! Want to see the result now?</h4>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button
                                    basic
                                    color="red"
                                    inverted
                                    onClick={() => [
                                        setOpenVoted(false),
                                        setOpen(false),
                                        window.location.reload(),
                                    ]}
                                >
                                    <Icon name="remove" /> No
                                </Button>
                                <Link to="/result">
                                    <Button
                                        color="green"
                                        inverted
                                        onClick={() => [setOpenVoted(false), setOpen(false)]}
                                    >
                                        <Icon name="checkmark" /> Yes
                                    </Button>
                                </Link>
                            </Modal.Actions>
                        </Modal>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cut;
