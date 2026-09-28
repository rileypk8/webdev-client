export default function Tables() {
  return (
    <div id="wd-tables">
      <h4>Table Tag</h4>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Quiz</th>
            <th align="center">Topic</th>
            <th align="center">Date</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Q1</td>
            <td align="center">HTML</td>
            <td align="center">2/3/21</td>
            <td align="right">85</td>
          </tr>
          <tr>
            <td>Q2</td>
            <td align="center">CSS</td>
            <td align="center">2/10/21</td>
            <td align="right">90</td>
          </tr>
          <tr>
            <td>Q3</td>
            <td align="center">JavaScript</td>
            <td align="center">2/17/21</td>
            <td align="right">95</td>
          </tr>
          <tr>
            <td>Q4</td>
            <td align="center">React</td>
            <td align="center">2/24/21</td>
            <td align="right">88</td>
          </tr>
          <tr>
            <td>Q5</td>
            <td align="center">Node.js</td>
            <td align="center">3/3/21</td>
            <td align="right">92</td>
          </tr>
          <tr>
            <td>Q6</td>
            <td align="center">Databases</td>
            <td align="center">3/10/21</td>
            <td align="right">78</td>
          </tr>
          <tr>
            <td>Q7</td>
            <td align="center">Git</td>
            <td align="center">3/17/21</td>
            <td align="right">84</td>
          </tr>
          <tr>
            <td>Q8</td>
            <td align="center">APIs</td>
            <td align="center">3/24/21</td>
            <td align="right">91</td>
          </tr>
          <tr>
            <td>Q9</td>
            <td align="center">Testing</td>
            <td align="center">3/31/21</td>
            <td align="right">87</td>
          </tr>
          <tr>
            <td>Q10</td>
            <td align="center">Deployment</td>
            <td align="center">4/7/21</td>
            <td align="right">93</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Average</td>
            <td align="right">88</td>
          </tr>
        </tfoot>
      </table>
      <div id="wd-your-table">
        <table border={1} width="100%">
          <thead>
            <tr>
              <td align="center">Band</td>
              <td align="center">Location</td>
              <td align="center">Date</td>
              <td align="center">Cost</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align="left">Gorillaz</td>
              <td align="left">TD Garden</td>
              <td align="center">Oct 1 2026</td>
              <td align="right">$150</td>
            </tr>
            <tr>
              <td align="left">Smashing Pumpkins</td>
              <td align="left">TD Garden</td>
              <td align="center">Oct 2 2026</td>
              <td align="right">$125</td>
            </tr>
            <tr>
              <td align="left">Bertha: Grateful Drag</td>
              <td align="left">Paradise Rock Club</td>
              <td align="center">Oct 16 2026</td>
              <td align="right">$45</td>
            </tr>
            <tr>
              <td align="left">Sugar</td>
              <td align="left">Roadrunner</td>
              <td align="center">Oct 17 2026</td>
              <td align="right">$75</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}