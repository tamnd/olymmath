---
tag: 742YPCZRGV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2747876
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73248
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pumac/2020
    source: hf-ai-mo-aops
    label: 2020 Princeton University Math Competition
---
Prove that there is a positive integer $M$ for which the following statement holds:
For all prime numbers $p$ , there is an integer $n$ for which $\sqrt{p} \le n \le M\sqrt{p}$ and $p \mod n \le \frac{n}{2020}$ .

Note: Here, $p \mod n$ denotes the unique integer $r \in {0, 1, ..., n - 1}$ for which $n|p -r$ . In other words, $p \mod n$ is the residue of $p$ upon division by $n$ .
