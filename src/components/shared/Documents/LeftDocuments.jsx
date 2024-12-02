import {
  DocumentsSome,
  LeftContainer,
  PapaDocumentSome,
} from './DocumentsStyle';

const DocumentsData = [
  {
    id: 1,
    icon: 'person-outline',
    title: 'Возраст',
    subTitle:
      'Ребенок должен быть в возрасте от 7 до 14 лет, что является подходящим периодом для освоения исламских ценностей.',
  },
  {
    id: 2,
    icon: 'people-circle-outline',
    title: 'Сопровождение',
    subTitle:
      'Если ребенок не может самостоятельно прийти и уйти, требуется сопровождение взрослого.',
  },
  {
    id: 3,
    icon: 'home-outline',
    title: 'Место нахождения',
    subTitle:
      'Ребенок должен находиться в Бишкеке для участия в курсах, обеспечивающих доступность и безопасность.',
  },
  {
    id: 4,
    icon: 'medkit-outline',
    title: 'Здоровье',
    subTitle:
      'Ребенок должен быть здоров, без заболеваний, представляющих опасность для его или чужого здоровья.',
  },
];

const LeftDocuments = () => {
  return (
    <>
      <LeftContainer>
        <h1>Необходимые требования для обучения</h1>
        <PapaDocumentSome>
          {DocumentsData.map((item) => (
            <DocumentsSome key={item.id}>
              <div className="icons">
                <ion-icon name={item.icon}></ion-icon>
              </div>
              <h2>{item.title}</h2>
              <p>{item.subTitle}</p>
            </DocumentsSome>
          ))}
        </PapaDocumentSome>
      </LeftContainer>
    </>
  );
};

export default LeftDocuments;
