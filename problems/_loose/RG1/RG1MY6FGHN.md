---
tag: RG1MY6FGHN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h516655
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10073
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2013
    source: hf-ai-mo-aops
    label: 2013 Online Math Open Problems
---
Let $S$ denote the set of words $W = w_1w_2\ldots w_n$ of any length $n\ge0$ (including the empty string $\lambda$ ), with each letter $w_i$ from the set $\{x,y,z\}$ . Call two words $U,V$ *similar* if we can insert a string $s\in\{xyz,yzx,zxy\}$ of three consecutive letters somewhere in $U$ (possibly at one of the ends) to obtain $V$ or somewhere in $V$ (again, possibly at one of the ends) to obtain $U$ , and say a word $W$ is *trivial* if for some nonnegative integer $m$ , there exists a sequence $W_0,W_1,\ldots,W_m$ such that $W_0=\lambda$ is the empty string, $W_m=W$ , and $W_i,W_{i+1}$ are similar for $i=0,1,\ldots,m-1$ . Given that for two relatively prime positive integers $p,q$ we have
$$\frac{p}{q} = \sum_{n\ge0} f(n)\left(\frac{225}{8192}\right)^n,$$where $f(n)$ denotes the number of trivial words in $S$ of length $3n$ (in particular, $f(0)=1$ ), find $p+q$ .

*Victor Wang*
