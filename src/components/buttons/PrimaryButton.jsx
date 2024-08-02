function PrimaryButton({name="primary",bgcolor="bg-blue-800",textColor="text-white", width="sm:w-32", borderColor="border-blue-700"}) {
    return (
        <>
            <button className={`uppercase border-solid border-2 ${borderColor} ${bgcolor} rounded font-semibold w-full  ${textColor} p-1 ${width}`}>{name}</button>
        </>
    )
}

export default PrimaryButton
