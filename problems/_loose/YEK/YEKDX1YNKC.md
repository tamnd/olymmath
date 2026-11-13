---
tag: YEKDX1YNKC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1077916
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78521
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267368
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2015
    source: hf-ai-mo-aops
    label: 2015 Online Math Open Problems
---
Consider polynomials $P$ of degree $2015$ , all of whose coefficients are in the set $\{0,1,\dots,2010\}$ . Call such a polynomial *good* if for every integer $m$ , one of the numbers $P(m)-20$ , $P(m)-15$ , $P(m)-1234$ is divisible by $2011$ , and there exist integers $m_{20}, m_{15}, m_{1234}$ such that $P(m_{20})-20, P(m_{15})-15, P(m_{1234})-1234$ are all multiples of $2011$ . Let $N$ be the number of good polynomials. Find the remainder when $N$ is divided by $1000$ .

*Proposed by Yang Liu*
