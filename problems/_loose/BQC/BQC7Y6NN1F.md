---
tag: BQC7Y6NN1F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 BMT
    url: https://artofproblemsolving.com/community/c6h3146408
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70455
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2022
    source: hf-ai-mo-aops
    label: 2022 BMT
---
Submit a positive integer $n$ less than $10^5$ . Let the sum of the valid submissions from all teams to this question be $S$ . If you submit an invalid answer, you will receive $0$ points. Otherwise, your score will be $ \max
\left(0,\lfloor 25 - \frac{|S'-n|}{10} \rfloor \right)$ , where $S'$ is the sum of the squares of the digits of $S$ .
