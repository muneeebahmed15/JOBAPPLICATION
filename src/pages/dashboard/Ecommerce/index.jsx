import { Row, Col } from "react-bootstrap";
import StatisticsWidget from "../../widgets/StatisticsWidget";
import InterviewList from "../Interviews/InterviewList";
import CurrentVacancies from "../Interviews/CurrentVacancies";
import { AllJob } from "../../actions/jobOpenings";
import { AllCandidates } from "../../actions/candidateApply";
import { GetInterviews } from "../../actions/interview";

const EcommerceDashboard = () => {
  const { list } = AllJob();
  const { list: candidateList } = AllCandidates();
  const { list: interviewList } = GetInterviews();

  return (
    <>
      <Row className="mt-2">
        <Col sm={6} xl={3}>
          <StatisticsWidget
            variant="primary"
            title="Jobs Open"
            stats={list?.length}
            icon="briefcase"
          />
        </Col>

        <Col sm={6} xl={3}>
          <StatisticsWidget
            variant="primary"
            title="Applicants"
            stats={candidateList.length}
            icon="file"
          />
        </Col>

        <Col sm={6} xl={3}>
          <StatisticsWidget
            variant="primary"
            title="Interviewed"
            stats={
              interviewList
                ? interviewList?.filter((x) => x.interviewConducted === true).length
                : 0
            }
            icon="file"
          />
        </Col>

        <Col sm={6} xl={3}>
          <StatisticsWidget
            variant="primary"
            title="Hired"
            stats={
              interviewList
                ? interviewList.filter((x) => x.hiringStatus === "Hired").length
                : 0
            }
            icon="user"
          />
        </Col>
      </Row>

      <InterviewList from={"dashboard"} />

      <CurrentVacancies from={"dashboard"} />
    </>
  );
};

export default EcommerceDashboard;
