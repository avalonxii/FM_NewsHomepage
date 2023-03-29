import Card from './Card'
import img01 from '../../assets/images/image-retro-pcs.jpg'
import img02 from '../../assets/images/image-top-laptops.jpg'
import img03 from '../../assets/images/image-gaming-growth.jpg'
import './notice.scss'

export default function Notice() {
    const notices = [
        {
            img: img01,
            num: '01',
            title: 'Reviving Retro PCs',
            text: 'What happens when old PCs are given modern upgrades?'
        },
        {
            img: img02,
            num: '02',
            title: 'Top 10 Laptops of 2022',
            text: 'Our best picks for various needs and budgets.'
        },
        {
            img: img03,
            num: '03',
            title: 'The Growth of Gaming',
            text: 'How the pandemic has sparked fresh opportunities.'
        }
    ]

    return (
        <div className='notices'>
            {notices.map((notice) => (
                <Card key={notice.num} notice={notice} />
            ))}
        </div>
    )
}
