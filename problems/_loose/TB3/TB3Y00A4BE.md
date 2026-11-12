---
tag: TB3Y00A4BE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Dutch Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3683710
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=49021
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nl-nwo/2024
    source: hf-ai-mo-aops
    label: 2024 Dutch Mathematical Olympiad
---
An $\ell$ -code is an integer $n\ge 0$ of at most $\ell$ digits, if necessary supplemented by leading zeros, so that it consists of $\ell$ digits in total. Thus, you can make a $4$ -code out of $310$ by writing it as $0310$ . An $\ell$ -code is called self-squared if the last $\ell$ digits of the square of that code form exactly the original `-code. Thus, the $1$ -codes $5$ and $6$ are self-squared, but the $3$ -code $ 006$ is not self-squared, because $6^2 = 36 = 036$ does not end in $006$ . The $2$ -code $76$ is self-squared, because $76^2 = 5776$ ends in $76$ .

(a) Prove that an $\ell$ -code $n$ is self-squared if and only if $n(n-1)$ is divisible by $10^{\ell}$ .
(b) Prove that any self-squared $\ell$ -code $n\ge 2$ ends in the digit $5$ or the digit $6$ .
(c) Prove that any self-squared $\ell$ -code $n\ge 2$ is extendable to a self-squared ( $\ell+1$ )-code in exactly one way by placing a digit in front of it.
(d) It follows from (b) and (c) that for every $\ell$ , there exist exactly two self-squared $\ell$ -codes $m,n\ge 2$ . What is their sum $m+n$ (in terms of $\ell$ )?
