import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {Card, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import Loader from '../components/Loader';

const Pokemon_details = ({match}) => {
    
    const id = match.params.id

    const [pokemonDetails, setPokemonDetails] = useState()
    const [loading, setLoading] = useState(true)

    const getPokemon = async (id) => {
        const details = await getPokemonData(id);
        setPokemonDetails(details.data);
        console.log(details.data)
        setLoading(false);
    }

    const getPokemonData = async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return res;
    }

    useEffect(() => {
        getPokemon(id);
    }, [])
    return (
        <>
            {loading ? (
                <Loader/>
            ) : (
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Card className='my-3 p-3 rounded text-center shadow p-3 mb-5 bg-white card-color' style={{ border: 'none' }}>
                            <Link to={`/pokemon/${pokemonDetails.id}`}>
                                <Card.Img style={{ width: '15rem' }} src={pokemonDetails.sprites.front_default} variant='top'/>
                            </Link>
                            <Card.Body className={`${pokemonDetails.types[0].type.name} rounded text-white`}>
                                <Link to={`/pokemon/${pokemonDetails.name}`} className='link-name'>
                                    <Card.Title as='div'>
                                        <strong>#{pokemonDetails.id} {pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.slice(1)}</strong>
                                    </Card.Title>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Row className='text-center'>
                        <Col>
                            <Card className='my-3 p-3 rounded text-center shadow p-3 mb-5 bg-white' style={{ border: 'none' }}>
                                {pokemonDetails.types.map(t => (
                                            <Col key={t.type.name}>
                                                <div className={`${t.type.name} rounded px-4 py-1`} style={{ color: 'white' }}>
                                                    <strong>{t.type.name.toUpperCase()}</strong>
                                                </div>
                                            </Col>
                                        ))}
                            </Card>
                            <Card className='my-3 p-3 rounded text-center shadow p-3 mb-5 bg-white' style={{ border: 'none' }}>
                                Weight: {pokemonDetails.weight}
                                
                            </Card>
                            <Card className='my-3 p-3 rounded text-center shadow p-3 mb-5 bg-white' style={{ border: 'none' }}>
                                height: {pokemonDetails.height}
                                
                            </Card>
                            <Card className='my-3 p-3 rounded text-center shadow p-3 mb-5 bg-white' style={{ border: 'none' }}>
                                Abilities: {pokemonDetails.abilities.map(a => (

                                        <Col key={a.ability.name} xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <div className={`rounded px-4 py-1`}>
                                                {a.ability.name.toUpperCase()}
                                            </div>
                                        </Col>
                                    ))}
                            </Card>
                            <Card className='my-3 p-3 rounded text-center shadow p-3 mb-5 bg-white' style={{ border: 'none' }}>
                            Move Set: {pokemonDetails.moves.map(a => (

                                    <Col key={a.move.name} xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <div className={`rounded px-4 py-1`}>
                                            {a.move.name.toUpperCase()}
                                        </div>
                                    </Col>
                                ))}
                                
                            </Card>
                            <Card className='my-3 p-3 rounded text-center shadow p-3 mb-5 bg-white' style={{ border: 'none' }}>
                                Stats: {pokemonDetails.stats.map(a => (
                                    

                                    <Col key={a.stat.name} xs={12} sm={12} md={12} lg={12} xl={12}>
                                        
                                        <div className={`rounded px-4 py-1`}>
                                            
                                            {a.stat.name.toUpperCase() } :  
                                            {" " + a.base_stat} 
                                        </div>
                                        
                                    </Col> 
                                ))}
                                
                            </Card>
                        </Col>
                    </Row>
                </Row>
            )}
        </>

    )
}

export default Pokemon_details