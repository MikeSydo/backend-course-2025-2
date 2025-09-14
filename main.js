const date = "20231001";
const time_period = "q";
const nbu_url = new URL("https://bank.gov.ua/NBUStatService/v1/statdirectory/basindbank");

nbu_url.searchParams.append("date", date);
nbu_url.searchParams.append("period", time_period);
nbu_url.searchParams.append("json", "");

console.log(nbu_url.href);