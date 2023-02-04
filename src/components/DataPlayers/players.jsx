/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Card } from "../components/Card";
import { Button } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { useFetchPlayer } from "./fetchData";

function Players() {

    const [isLoading, setIsLoading] = useState(false);

    const { players, setPlayers } = useFetchPlayer();

    return (
        <div>
            {isLoading ?
                    players.map((player) => (
                        <Card player={player} />
                    )) :
                    <div className="spinner">
                        <Button variant="danger" disabled>
                            <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            Loading...
                        </Button>
                    </div>
            }

        </div >
    )
}

