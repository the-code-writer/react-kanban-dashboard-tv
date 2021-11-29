import React from 'react';
import './Card.css';
import 'font-awesome/css/font-awesome.min.css';
import Card from './Card.js';
import SkeletonCard from './SkeletonCard.js';
import LoaderIndicator from './LoaderIndicator.js';
import CardColumnHeaders from './CardColumnHeaders.js';

class JobItemSwiper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };

    }

    componentDidMount() {

        setTimeout(() => {
            this.setState({favoritecolor: "yellow"})
        }, 1000);

    }

    render() {

        return (

            <div className="swiper">
                <div className="swiper-wrapper">

                    {this.props.items.length > 0 ?

                            this.props.items.map(slide => (

                                <div className="swiper-slide">
                                    <CardColumnHeaders/>
                                    <div className="row kanban-tiles-container-row">

                                        <div className="col-3 col-md-3">

                                            {Object.values(slide.NOT_STARTED).map(jobItem => (

                                                <Card
                                                    object={jobItem}
                                                    state='j-i-1'
                                                    fullname={jobItem.customer_name}
                                                    job={jobItem.job_number}
                                                    description={jobItem.description}
                                                    url={jobItem.id+'/'+jobItem.tenant_id+'/'+jobItem.customer_id+'/'+jobItem.job_number}
                                                    time={jobItem.time_ago}
                                                    escalate={jobItem.is_escalate === 1}
                                                />

                                            ))}

                                        </div>

                                        <div className="col-3 col-md-3">

                                            {Object.values(slide.IN_PROGRESS).map(jobItem => (

                                                <Card
                                                    object={jobItem}
                                                    state='j-i-2'
                                                    fullname={jobItem.customer_name}
                                                    job={jobItem.job_number}
                                                    description={jobItem.description}
                                                    url={jobItem.id+'/'+jobItem.tenant_id+'/'+jobItem.customer_id+'/'+jobItem.job_number}
                                                    time={jobItem.time_ago}
                                                    escalate={jobItem.is_escalate === 1}
                                                />

                                            ))}

                                        </div>

                                        <div className="col-3 col-md-3">

                                            {Object.values(slide.COMPLETED).map(jobItem => (

                                                <Card
                                                    object={jobItem}
                                                    state='j-i-3'
                                                    fullname={jobItem.customer_name}
                                                    job={jobItem.job_number}
                                                    description={jobItem.description}
                                                    url={jobItem.id+'/'+jobItem.tenant_id+'/'+jobItem.customer_id+'/'+jobItem.job_number}
                                                    time={jobItem.time_ago}
                                                    escalate={jobItem.is_escalate === 1}
                                                />

                                            ))}

                                        </div>

                                        <div className="col-3 col-md-3">

                                            {Object.values(slide.DELIVERED).map(jobItem => (

                                                <Card
                                                    object={jobItem}
                                                    state='j-i-4'
                                                    fullname={jobItem.customer_name}
                                                    job={jobItem.job_number}
                                                    description={jobItem.description}
                                                    url={jobItem.id+'/'+jobItem.tenant_id+'/'+jobItem.customer_id+'/'+jobItem.job_number}
                                                    time={jobItem.time_ago}
                                                    escalate={jobItem.is_escalate === 1}
                                                />

                                            ))}

                                        </div>

                                    </div>

                                </div>

                            ))

                        :

                            [1].map(slide => (

                                <div className="swiper-slide">
                                    <CardColumnHeaders/>
                                    <div className="row kanban-tiles-container-row">

                                        {[1,2,3,4].map(col => (

                                        <div className="col-3 col-md-3">

                                            {[1, 2, 3].map(skeletonCard => (
                                                <div className="card job-item j-i-0">
                                                    <ul className="list-group list-group-flush  list-group-skeleton">
                                                         <SkeletonCard/>
                                                    </ul>
                                                </div>
                                            ))}

                                        </div>

                                        ))}

                                    </div>

                                </div>

                            ))

                    }

                </div>

                {this.props.items.length < 0 &&

                    <LoaderIndicator value="1"/>

                }

            </div>

        );

    }

}

export default JobItemSwiper;
