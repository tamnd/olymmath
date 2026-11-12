---
tag: 3K9D4FCX8C
kind: problem
type: answer
answer: миф
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=9000
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
To transmit a three-letter word through a channel, the following method is used. Each letter of the word is assigned a pair of digits according to the rule: А -00, Б $-01, \mathrm{~B}-02, \ldots$, Я - 32. After that, the obtained sequence of digits $m_{1}, m_{2}, \ldots, m_{6}$. is transformed by the formula:

$c_{i}=f\left(m_{i}, c_{\{i-1\}}\right), i \in\{1, \ldots, 6\}$.

where $c_{0} \in\{0, \ldots, 9\}$ - a randomly chosen digit and $f(x, y)=r_{10}(x+4 y)-$ the remainder of the division by 10 of the number $x+4 y$. Then the sequence $c_{0}, c_{1}, \ldots, c_{6}$ is transmitted through the channel. Crypto managed to intercept $\left(c_{0}, c_{2}, c_{4}, c_{6}\right)=(1,3,7,1)$, what word could have been transmitted through the channel? Provide the word in your answer (in lowercase letters).
