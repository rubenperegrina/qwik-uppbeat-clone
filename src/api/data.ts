export const getData = async () => {
    const data = await fetch('https://eonrnkklmow14tx.m.pipedream.net').then((res) => res.json())
    return data
}