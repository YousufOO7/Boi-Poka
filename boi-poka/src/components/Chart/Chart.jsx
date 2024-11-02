import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const Chart = props => {

    const subjectMarks = [
        { "exam": 1, "math": 85, "physics": 78 },
        { "exam": 2, "math": 88, "physics": 82 },
        { "exam": 3, "math": 92, "physics": 79 },
        { "exam": 4, "math": 76, "physics": 85 },
        { "exam": 5, "math": 90, "physics": 87 },
        { "exam": 6, "math": 84, "physics": 80 },
        { "exam": 7, "math": 78, "physics": 76 },
        { "exam": 8, "math": 95, "physics": 89 },
        { "exam": 9, "math": 91, "physics": 83 },
        { "exam": 10, "math": 87, "physics": 90 }
    ]

    return (
        <div className='mx-auto'>
           <BarChart width={600} height={500} data={subjectMarks}>
                <Tooltip wrapperStyle={{ width: 100, backgroundColor: 'red' }}></Tooltip>
                <Bar dataKey={'math'}></Bar>
           </BarChart>
        </div>
    );
};




Chart.propTypes = {
    props: PropTypes
};

export default Chart;