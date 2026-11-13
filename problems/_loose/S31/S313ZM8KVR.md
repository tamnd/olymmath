---
tag: S313ZM8KVR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h254974
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35825
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=149116
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2004
    source: hf-ai-mo-aops
    label: 2004 China Team Selection Test
---
$ S$ is a non-empty subset of the set $ \{ 1, 2, \cdots, 108 \}$ , satisfying:

(1) For any two numbers $ a,b \in S$ ( may not distinct), there exists $ c \in S$ , such that $ \gcd(a,c)=\gcd(b,c)=1$ .

(2) For any two numbers $ a,b \in S$ ( may not distinct), there exists $ c' \in S$ , $ c' \neq a$ , $ c' \neq b$ , such that $ \gcd(a, c') > 1$ , $ \gcd(b,c') >1$ .

Find the largest possible value of $ |S|$ .
