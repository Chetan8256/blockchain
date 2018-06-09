import React, { Component } from "react";
import factory from '../ethereum/factory';
import { Card, Button, Header } from "semantic-ui-react";
//import "semantic-ui-css/semantic.min.css";
import Layout from '../components/Layout';

class CampainIndex extends Component {


    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployCampaigns().call();
        return { campaigns };
    }

    renderCampaings() {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: < a > View Campaign < /a>,
                fluid: true
            }
        });

        return <Card.Group items = { items }
        />;
    }

    render() {
        return
            <Layout>
                <div>
                    <link rel = "stylesheet"
                        href = "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css" >
                    </link>
                    <h3>Open Campaigns</h3>
                    { this.renderCampaings() }
                    <Button content = "Create Campaign"
                        icon = "add circle"
                        primary>
                    </Button>
                </div>
            </Layout>
    }
}
export default CampainIndex;
