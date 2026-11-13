---
tag: 2ZE5S13BME
kind: problem
type: answer
answer: \frac{4}{5}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265283
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For $i=1,2,\ldots,7$, Zadam Heng chooses a positive integer $m_i$ at random such that each positive integer $k$ is chosen with probability $\frac{2^i-1}{2^{ik}}$. If $m_1+2m_2+\ldots+7m_7\neq35$, Zadam keeps rechoosing the $m_i$ until this equality holds. Given that he eventually stops, what is the probability that $m_4=1$ when Zadam stops?

*2019 CCA Math Bonanza Tiebreaker Round #3*
