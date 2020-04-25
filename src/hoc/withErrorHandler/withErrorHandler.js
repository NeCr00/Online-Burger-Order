import React, { Component } from 'react'
import Modal from '../../components/UI/Modal/Modal'
import Auxx from '../Auxx/Auxx'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state= {
            error:null
        }

        componentDidMount(){
            axios.interceptors.request.use (req =>{
                this.setState({error:null})
                return req;
            })

            axios.interceptors.response.use (res=>res,error=>{
                this.setState({error:error})
            })
        }

    errorConfirmedhandler= () =>{
        this.setState({error:null})
    }
        render() {
            return (
                <Auxx>
                    <Modal show= {this.state.error}
                         modalClosed= {this.errorConfirmedhandler}>
                        {this.state.error? this.state.error.message:null}
                </Modal>
                    <WrappedComponent {...this.props}></WrappedComponent>

                </Auxx>
            )
        }
    }
}
export default withErrorHandler;