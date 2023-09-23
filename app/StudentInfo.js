import Link from 'next/link';

const StudentInfo = () => {
  return (
    <div>
      <p>Your Name</p>
      <p>Your course section: CPRG 306 A</p>
      <Link href="https://github.com/dingbull">Visit My GitHub</Link>
    </div>
  );
}

export default StudentInfo;
