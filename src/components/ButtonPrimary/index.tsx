import './styles.css';

type Props = {
    text: string;
}

export default function ButtonPrimary({ text }: Props) {
    return (
        <>
            <div className="card__btn btn-blue">{text}</div>
        </>
    );
}