import { MBTI_TYPES } from '../constants/mbtiData';

interface MBTISelectorProps {
  onSelect: (type: string) => void;
}

const MBTI_GROUPS = [
  { name: '분석가형 (NT)', types: ['INTJ', 'INTP', 'ENTJ', 'ENTP'], color: 'from-purple-100 to-indigo-100' },
  { name: '외교관형 (NF)', types: ['INFJ', 'INFP', 'ENFJ', 'ENFP'], color: 'from-green-100 to-teal-100' },
  { name: '관리자형 (SJ)', types: ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ'], color: 'from-blue-100 to-cyan-100' },
  { name: '탐험가형 (SP)', types: ['ISTP', 'ISFP', 'ESTP', 'ESFP'], color: 'from-yellow-100 to-orange-100' },
];

export const MBTISelector = ({ onSelect }: MBTISelectorProps) => {
  return (
    <div className="space-y-6">
      {MBTI_GROUPS.map((group) => (
        <div key={group.name} className={`mbti-group bg-gradient-to-br ${group.color}`}>
          <h3 className="mbti-group-title">{group.name}</h3>
          <div className="grid grid-cols-2 gap-3">
            {group.types.map((type) => {
              const mbtiData = MBTI_TYPES.find(m => m.type === type);
              return (
                <button
                  key={type}
                  onClick={() => onSelect(type)}
                  className="mbti-btn flex items-center justify-center gap-2"
                >
                  <span className="text-lg">{mbtiData?.emoji}</span>
                  <span>{type}</span>
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
