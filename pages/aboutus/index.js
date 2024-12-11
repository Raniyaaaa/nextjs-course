import Link from 'next/link'
import { Fragment } from 'react';
function AboutUsPage(){
  const details = [
    { id: 1, name: 'Yash', role: 'Senior Developer' },
    { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
    { id: 3, name: 'Suresh', role: 'Frontend Developer' }
  ];

    return (
      <Fragment>
        <h1>The AboutUs Page</h1>
        <ul>
          {details.map((dev)=>(
            <li>
              <Link href={`/aboutus/${dev.id}`}>{`${dev.name}`}</Link>
            </li>
          ))}
        </ul>
      </Fragment>
    )
}
export default AboutUsPage;