import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const Chart = props => {

    const subjectMarks = [
        { "student": "Alice", "math_marks": 85, "physics_marks": 78 },
        { "student": "Bob", "math_marks": 92, "physics_marks": 88 },
        { "student": "Charlie", "math_marks": 78, "physics_marks": 72 },
        { "student": "David", "math_marks": 88, "physics_marks": 81 },
        { "student": "Eve", "math_marks": 90, "physics_marks": 85 },
        { "student": "Frank", "math_marks": 76, "physics_marks": 69 },
        { "student": "Grace", "math_marks": 95, "physics_marks": 92 },
        { "student": "Heidi", "math_marks": 82, "physics_marks": 80 },
        { "student": "Ivan", "math_marks": 89, "physics_marks": 84 },
        { "student": "Judy", "math_marks": 84, "physics_marks": 77 }
    ]


    const getPath = (x, y, width, height) => (
        `M${x},${y + height}
         C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
         C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
         Z`
    );

    const TriangleBar = (props) => {
        const {
            fill, x, y, width, height,
        } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };



    return (
        <div className='my-10 flex justify-center'>
            <BarChart width={900} height={500} data={subjectMarks}>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" ></CartesianGrid>
                <Tooltip wrapperStyle={{ width: 200, backgroundColor: '#ccc' }}></Tooltip>
                <Bar dataKey="math_marks" fill="#8884d8"
                    shape={<TriangleBar />} />
                <Bar dataKey="physics_marks" fill="red"
                    shape={<TriangleBar />} />
                <XAxis dataKey="student" />
                <YAxis />
            </BarChart>

        </div>
    );
};




Chart.propTypes = {
    props: PropTypes
};

export default Chart;