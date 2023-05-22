import * as C from './styles';
import SquaresDesign from '../SquaresDesign';
import CirclesDesign from '../../assets/Circles.png';
import LinesDesign from '../../assets/softRiscoBlueIcon.png';

const LeftSideDesign = () => {
  return (
    <C.Container>
        <div className='squares-area'>
            <SquaresDesign/>
        </div>
        <div className='circles-area'>
            <img src={CirclesDesign} alt='circles-design'/>
        </div>
        <div className='squares-area2'>
            <SquaresDesign/>
        </div>
        <div className='circles-area2'>
            <img src={CirclesDesign} alt='circles-design'/>
        </div>
        <div className='lines-design'>
            <img src={LinesDesign} alt='lines-design'/>
        </div>
    </C.Container>
  )
}

export default LeftSideDesign;