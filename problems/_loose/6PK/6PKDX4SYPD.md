---
tag: 6PKDX4SYPD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=103025
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
26.1.14 ** A company needs to hire a secretary, with a total of 10 people applying. The company manager decides to interview them in the order of their application. The first 3 people will definitely not be hired. Starting from the 4th person, he will be compared with those who have been interviewed before. If his ability surpasses all those previously interviewed, he will be hired; otherwise, he will not be hired, and the next person will be interviewed. If none of the first 9 people are hired, the last person interviewed will be hired.

Assuming the abilities of these 10 people are all different and can be ranked from 1 to 10 in terms of strength. Clearly, the company's final decision on who to hire depends on the order in which these 10 people apply. There are 10! such permutations. Let $A_{k}$ represent the number of different application orders in which the person with the $k$-th strongest ability is hired, and let $\frac{A_{k}}{10!}$ represent the probability of him being hired.
Prove: Under the company manager's policy, the following holds:
(1) $A_{1}>A_{2}>\cdots>A_{8}=A_{9}=A_{10}$;
(2) The company has more than a 70% chance of hiring one of the top 3 most capable people, and no more than a 10% chance of hiring one of the bottom 3 least capable people.
