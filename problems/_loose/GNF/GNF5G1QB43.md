---
tag: GNF5G1QB43
kind: problem
type: answer
answer: "441"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0001.parquet#row=385
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm
    source: hf-mathnet
    label: Brazil Brazilian Math Olympiad
---
A positive integer $n$ is *clowny* if the number obtained by reversing its digits is greater than $n$. For example, $2009$ is clowny because $9002$ is greater than $2009$; however, $2010$ is not clowny because $0102 = 102$ is less than $2010$ and $3443$ is not clowny because it is equal to the number obtained by reversing its digits. How many four-digit numbers are clowny?
