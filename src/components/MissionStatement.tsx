
import React from 'react';

const MissionStatement = () => {
  return (
    <div className="bg-white py-16">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-church-navy mb-8">우리가교회</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed whitespace-pre-line">
            {`하나님께서는 우리를 성전 삼아주시고,
성도라 부르셨습니다.
성도는 교회를 다니는 것이 아니라,
교회가 되어 가는 것입니다. 그래서 '우리가교회' 입니다.
'우리가교회'는 개혁주의 신앙을 기초로 건강한 교회를 꿈꾸는 공동체입니다.`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionStatement;
