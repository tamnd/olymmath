---
tag: XBVQ8Z29TV
kind: problem
type: answer
answer: "158761"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=264979
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Will has a magic coin that can remember previous flips. If the coin has already turned up heads $m$ times and tails $n$ times, the probability that the next flip turns up heads is exactly $\frac{m+1}{m+n+2}$. Suppose that the coin starts at $0$ flips. The probability that after $10$ coin flips, heads and tails have both turned up exactly $5$ times can be expressed as $\frac{m}{n}$ for relatively prime positive integers $m$ and $n$. Compute $m+n$.

*Proposed by Nathan Xiong*
