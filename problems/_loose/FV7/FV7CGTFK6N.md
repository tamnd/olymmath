---
tag: FV7CGTFK6N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1996 Singapore Senior Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2051677
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=59343
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251480
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo/1996
    source: hf-ai-mo-aops
    label: 1996 Singapore Senior Math Olympiad
---
Let $180^o < \theta_1 < \theta_2 <...< \theta_n = 360^o$ . For $i = 1,2,..., n$ , $P_i = (\cos \theta_i^o, \sin \theta_i^o)$ is a point on the circle $C$ with centre $(0,0)$ and radius $1$ . Let $P$ be any point on the upper half of $C$ . Find the coordinates of $P$ such that the sum of areas $[PP_1P_2] + [PP_2P_3] + ...+ [PP_{n-1}P_n]$ attains its maximum.
