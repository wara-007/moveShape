import { useTranslation } from "react-i18next";
import './Home.scss';
import { Card, Col, Row, Select } from 'antd';
export const Home = () => {

    const { t, i18n } = useTranslation(['home', 'main']);

    const onClickLanguageChange = (value: string) => {
        const language = value;
        i18n.changeLanguage(language); //change the language
    }

    return(
    <div className="container">
    <div className="boxSelect">
          <Select
      defaultValue="en"
      style={{ width: 120 }}
      onChange={onClickLanguageChange}
      options={[
        { value: 'en', label: 'EN' },
        { value: 'th', label: 'TH' }
      ]}
    />
    </div>
  <div className="content">
        <Row>
            <Col span={8}>
            <Card title="Default size card" extra={<a href="/layout">More</a>} style={{ width: 300 }}>
            {t("line1", {ns: ['main','home']})} <br/>
                        {t("line2", {ns: ['main','home']})} <br/>
                        {t("line3", {ns: ['main','home']})} <br/>
            </Card>
            </Col>
            <Col span={8}>
            <Card title="Default size card" extra={<a href="/layout">More</a>} style={{ width: 300 }}>
            {t("line1", {ns: ['main','home']})} <br/>
                        {t("line2", {ns: ['main','home']})} <br/>
                        {t("line3", {ns: ['main','home']})} <br/>
            </Card>
            </Col>
            <Col span={8}>
            <Card title="Default size card" extra={<a href="/layout">More</a>} style={{ width: 300 }}>
            {t("line1", {ns: ['main','home']})} <br/>
                        {t("line2", {ns: ['main','home']})} <br/>
                        {t("line3", {ns: ['main','home']})} <br/>
            </Card>
            </Col>
        </Row>
  </div>
    
  </div>
    );
}

