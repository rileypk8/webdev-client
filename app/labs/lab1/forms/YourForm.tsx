export default function YourForm() {
  return (
    <div id="wd-your-form">
      <h4>Student Profile</h4>

      <h5>Text fields</h5>
      <label htmlFor="wd-your-first-name">First name:</label>
      <input
        type="text"
        placeholder="Cait"
        defaultValue=""
        id="wd-your-first-name"
      />
      <br />
      <label htmlFor="wd-your-last-name">Last name:</label>
      <input
        type="text"
        placeholder="Riley"
        defaultValue=""
        id="wd-your-last-name"
      />
      <br />
      <label htmlFor="wd-your-student-id">Student ID:</label>
      <input
        type="password"
        placeholder="000000000"
        defaultValue=""
        id="wd-your-student-id"
      />
      <br />

      <h5>Bio</h5>
      <label htmlFor="wd-your-bio">Why I am taking this course:</label>
      <br />
      <textarea
        id="wd-your-bio"
        cols={40}
        rows={4}
        defaultValue="I want to get better at building full-stack web apps."
      />

      <h5>Class standing</h5>
      <input
        type="radio"
        name="standing"
        id="wd-standing-freshman"
        value="FRESHMAN"
      />
      <label htmlFor="wd-standing-freshman">Freshman</label>
      <br />
      <input
        type="radio"
        name="standing"
        id="wd-standing-sophomore"
        value="SOPHOMORE"
      />
      <label htmlFor="wd-standing-sophomore">Sophomore</label>
      <br />
      <input
        type="radio"
        name="standing"
        id="wd-standing-junior"
        value="JUNIOR"
      />
      <label htmlFor="wd-standing-junior">Junior</label>
      <br />
      <input
        type="radio"
        name="standing"
        id="wd-standing-senior"
        value="SENIOR"
      />
      <label htmlFor="wd-standing-senior">Senior</label>
      <br />
      <input
        type="radio"
        name="standing"
        id="wd-standing-graduate"
        defaultChecked
        value="GRADUATE"
      />
      <label htmlFor="wd-standing-graduate">Graduate</label>

      <h5>Enrollment</h5>
      <input
        type="radio"
        name="enrollment"
        id="wd-enrollment-full-time"
        defaultChecked
        value="FULL_TIME"
      />
      <label htmlFor="wd-enrollment-full-time">Full-time</label>
      <br />
      <input
        type="radio"
        name="enrollment"
        id="wd-enrollment-part-time"
        value="PART_TIME"
      />
      <label htmlFor="wd-enrollment-part-time">Part-time</label>

      <h5>Interests</h5>
      <input
        type="checkbox"
        name="interests"
        id="wd-interest-webdev"
        defaultChecked
      />
      <label htmlFor="wd-interest-webdev">Web development</label>
      <br />
      <input
        type="checkbox"
        name="interests"
        id="wd-interest-ai"
        defaultChecked
      />
      <label htmlFor="wd-interest-ai">Artificial intelligence</label>
      <br />
      <input type="checkbox" name="interests" id="wd-interest-networks" />
      <label htmlFor="wd-interest-networks">Networks</label>
      <br />
      <input type="checkbox" name="interests" id="wd-interest-data" />
      <label htmlFor="wd-interest-data">Data science</label>

      <h5>Major</h5>
      <label htmlFor="wd-your-major">Major: </label>
      <br />
      <select id="wd-your-major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="IS">Information Systems</option>
        <option value="DS">Data Science</option>
        <option value="EE">Electrical Engineering</option>
      </select>

      <h5>Topics to deepen this term</h5>
      <label htmlFor="wd-your-topics">Topics: </label>
      <br />
      <select
        multiple
        id="wd-your-topics"
        defaultValue={["REACT", "NODE"]}
      >
        <option value="REACT">React</option>
        <option value="NODE">Node.js</option>
        <option value="DATABASES">Databases</option>
        <option value="TESTING">Testing</option>
        <option value="DEPLOYMENT">Deployment</option>
      </select>

      <h5>More about me</h5>
      <label htmlFor="wd-your-email">School email: </label>
      <input
        type="email"
        placeholder="husky@northeastern.edu"
        defaultValue=""
        id="wd-your-email"
      />
      <br />
      <label htmlFor="wd-your-grad-year">Expected graduation year: </label>
      <input
        type="number"
        defaultValue="2027"
        min={2024}
        max={2032}
        id="wd-your-grad-year"
      />
      <br />
      <label htmlFor="wd-your-start-date">Program start date: </label>
      <input
        type="date"
        defaultValue="2023-09-05"
        min="1900-01-01"
        max="2035-12-31"
        id="wd-your-start-date"
      />
      <br />
      <label htmlFor="wd-your-excitement">
        How excited are you about this course (0-10):{" "}
      </label>
      <input
        type="range"
        defaultValue="8"
        min="0"
        max="10"
        id="wd-your-excitement"
      />

      <br />
      <button id="wd-your-save" type="submit">
        Save
      </button>
      <button id="wd-your-cancel" type="button">
        Cancel
      </button>
    </div>
  );
}
