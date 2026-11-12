---
tag: DV2HF22HRG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h585537
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11662
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2014
    source: hf-ai-mo-aops
    label: 2014 Online Math Open Problems
---
For a positive integer $n$ , an *$n$ -branch* $B$ is an ordered tuple $(S_1, S_2, \dots, S_m)$ of nonempty sets (where $m$ is any positive integer) satisfying $S_1 \subset S_2 \subset \dots \subset S_m \subseteq \{1,2,\dots,n\}$ . An integer $x$ is said to *appear* in $B$ if it is an element of the last set $S_m$ . Define an *$n$ -plant* to be an (unordered) set of $n$ -branches $\{ B_1, B_2, \dots, B_k\}$ , and call it *perfect* if each of $1$ , $2$ , \dots, $n$ appears in exactly one of its branches.

Let $T_n$ be the number of distinct perfect $n$ -plants (where $T_0=1$ ), and suppose that for some positive real number $x$ we have the convergence $$ \ln \left( \sum_{n \ge 0} T_n \cdot \frac{\left( \ln x \right)^n}{n!} \right) = \frac{6}{29}. $$ If $x = \tfrac mn$ for relatively prime positive integers $m$ and $n$ , compute $m+n$ .

*Proposed by Yang Liu*
