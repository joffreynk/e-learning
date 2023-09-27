import qs from 'query-string'

type Props = {
    params: string,
    key: string,
    value: string
}

export const formQueryUrl = ({params, key, value}: Props)=>{
    const currentUrl = qs.parse(params)
    currentUrl[key] = value
    return qs.stringifyUrl(
        {url: window.location.pathname, query: currentUrl},
        {skipNull: true}
    )

}