import NewTexto from './NewTexto'

export default function New() {
    let infos = [
        {
            title: 'Hydrogen VS Electric Cars',
            text: 'Will hydrogen-fueled cars ever catch up to EVs?'
        },
        {
            title: 'The Downsides of AI Artistry',
            text: 'What are the possible adverse effects of on-demand AI image generation?'
        },
        {
            title: 'Is VC Funding Drying Up?',
            text: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.'
        }
    ]

    return (
        <div className='new'>
            <h3>New</h3>

            {infos.map((info) => (
                <NewTexto info={info} />
            ))}
        </div>
    )
}
