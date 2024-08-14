import './styles.css';

type Props = {
    text: string;
}

export default function ButtonInverse({ text }: Props) {
    return (
        <>
            <div className="card__btn btn-white">{text}</div>
        </>
    );
}