---
tag: 5V3MM0DKQW
kind: problem
type: answer
answer: Theexpectedabsolutedeviationinseriesof10tossesisgreaterthaninseriesof100tosses
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=10868
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Where is the deviation greater? We will toss a symmetric coin $n$ times. Suppose that heads appeared $m$ times. The number $m / n$ is called the frequency of heads. The number $\frac{m}{n}-0.5$ is called the deviation of the frequency from the probability, and the number $\left|\frac{m}{n}-0.5\right|$ is called the absolute deviation. Note that the deviation and the absolute deviation are random variables. For example, if the coin is tossed 5 times and heads appear twice, then the deviation is $\frac{2}{5}-0.5=-0.1$, and the absolute deviation is $|-0.1|=0.1$.

The experiment consists of two parts: first, the coin is tossed 10 times, and then 100 times. In which of these cases is the expected value of the absolute deviation of the frequency of heads from the probability greater?
