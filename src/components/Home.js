import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Content: {
        "Taj Mahal":
          "The Taj Mahal 'Crown of the Palace', is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan (reigned from 1628 to 1658) to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall. Construction of the mausoleum was essentially completed in 1643, but work continued on other phases of the project for another 10 years. The Taj Mahal complex is believed to have been completed in its entirety in 1653 at a cost estimated at the time to be around 32 million rupees, which in 2020 would be approximately 70 billion rupees (about U.S. $916 million). The construction project employed some 20,000 artisans under the guidance of a board of architects led by the court architect to the emperor, Ustad Ahmad Lahauri. The Taj Mahal was designated as a UNESCO World Heritage Site in 1983 for being 'the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage'. It is regarded by many as the best example of Mughal architecture and a symbol of India's rich history. The Taj Mahal attracts 7–8 million visitors a year and in 2007, it was declared a winner of the New 7 Wonders of the World (2000–2007) initiative.",
        "India Gate":
          "The foundation stone of India's largest war graves and memorials to soldiers killed in the First World War was laid down on 10 February 1921 by the Duke of Connaught. Sir Edwin Lutyens was the chief designer. It was inaugurated on February 12, 1931 by Viceroy Lord Irwin.The entire arch stands on a low base of red Bharatpur stone and rises in stages to a huge moulding. It has the names of Indian soldiers inscribed on its walls, who gave up their lives in the Afghan Wars and World War I. Following the Bangladesh Liberation war in 1972, a structure consisting of a black marble plinth with a reversed rifle, capped by a war helmet and bounded by four eternal flames, was built beneath the archway. This structure, called Amar Jawan Jyoti (Flame of the Immortal Soldier), has since 1971 served as India's tomb of the unknown soldier. India Gate is counted amongst the largest war memorials in India and every Republic Day, the Prime Minister visits the gate to pay their tributes to the Amar Jawan Jyoti, following which the Republic Day parade starts. The memorial-gate is also a popular spot for protests by the civil society in New Delhi.",
        "Golden Temple":
          "The Golden Temple Amritsar India (Sri Harimandir Sahib Amritsar) is not only a central religious place of the Sikhs, but also a symbol of human brotherhood and equality. Everybody, irrespective of cast, creed or race can seek spiritual solace and religious fulfilment without any hindrance. It also represents the distinct identity, glory and heritage of the Sikhs. To pen-down the philosophy, ideology, the inner and outer beauty, as well as the historical legacy of Sri Harmandir Sahib is a momentous task. It is a matter of experience rather than a of description. The Golden Temple is spiritually the most significant shrine in Sikhism. It became a center of the Singh Sabha Movement between 1883 and 1920s, and the Punjabi Suba movement between 1947 and 1966. In the early 1980s, the Gurdwara became a center of conflict between the Indian government led by Indira Gandhi, some Sikh groups and a faithful movement led by Jarnail Singh Bhindranwale seeking to create a new nation named Khalistan. In 1984, Indira Gandhi sent in the Indian Army as part of Operation Blue Star, leading to deaths of over 1,000 Sikh soldiers and civilians, as well as causing much damage to the Gurdwara and the destruction of Akal Takht. The Gurdwara complex was rebuilt again after the 1984 damage.",
      },
      CurrentContent: "",
    };
  }

  handleDropdownClick = (e) => {
    const content = this.state.Content[e.target.value];
    this.setState({
      CurrentContent: content,
    });
  };

  render() {
    return (
      <div id="Home">
        <select name="menu" id="dropdown" onChange={this.handleDropdownClick}>
          <option value="" defaultValue>
            Dropdown
          </option>
          <option value="India Gate">India Gate</option>
          <option value="Taj Mahal">Tajmahal</option>
          <option value="Golden Temple">Golden Temple</option>
        </select>

        <p>{this.state.CurrentContent}</p>
        <h3>
          Note: Here should be the text related to selected dropdown option
        </h3>
      </div>
    );
  }
}

export default Home;
