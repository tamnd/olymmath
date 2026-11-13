---
tag: 1FFK92VPE1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1986 French Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2567039
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39076
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236408
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst/1986
    source: hf-ai-mo-aops
    label: 1986 French Mathematical Olympiad
---
The functions $f,g:[0,1]\to\mathbb R$ are given with the formulas $$ f(x)=\sqrt[4]{1-x},\enspace g(x)=f(f(x)), $$ and $c$ denotes any solution of $x=f(x)$ .

(a) i. Analyze the function $f(x)$ and draw its graph. Prove that the equation $f(x)=x$ has the unique root $c$ satisfying $c\in[0.72,0.73]$ .
ii. Analyze the function $f'(x)$ . Let $M_1$ and $M_2$ be the points of the graph of $f(x)$ with different $x$ coordinates. What is the position of the arc $M_1M_2$ of the graph with respect to the segment $M_1M_2$ ?
iii. Analyze the function $g(x)$ and draw its graph. What is the position of that graph with respect to the line $y=x$ ? Find the tangents to the graph at points with $x$ coordinates $0$ and $1$ .
iv. Prove that every sequence $\{a_n\}$ with the conditions $a_1\in(0,1)$ and $a_{n+1}=f(a_n)$ for $n\in\mathbb N$ converges.

(b) On the graph of the function $f(x)$ consider the points $M$ and $M'$ with $x$ coordinates $x$ and $f(x)$ , where $x\ne c$ .
i. Prove that the line $MM'$ intersects with the line $y=x$ at the point with $x$ coordinate $$ h(x)=x-\frac{(f(x)-x)^2}{g(x)+x-2f(x)}. $$ ii. Prove that if $x\in(0,c)$ then $h(x)\in(x,c)$ .
iii. Analyze whether the sequence $\{a_n\}$ satisfying $a_1\in(0,c),a_{n+1}=h(a_n)$ for $n\in\mathbb N$ converges. Prove that the sequence $\{\tfrac{a_{n+1}-c}{a_n-c}\}$ converges and find its limit.
(c) Assume that the calculator approximates every number $b\in[-2,2]$ by number $\overline b$ having $p$ decimal digits after the decimal point. We are performing the following sequence of operations on that calculator:

1) Set $a=0.72$ ;
2) Calculate $\delta(a)=\overline{f(a)}-a$ ;
3) If $|\delta(a)|>0.5\cdot10^{-p}$ , then calculate $\overline{h(a)}$ and go to the operation $2)$ using $\overline{h(a)}$ instead of $a$ ;
4) If $|\delta(a)|\le0.5\cdot10^{-p}$ , finish the calculation.

Let $\overleftrightarrow c$ be the last of calculated values for $\overline{h(a)}$ . Assuming that for each $x\in[0.72,0.73]$ we have $\left|\overline{f(x)}-f(x)\right|<\epsilon$ , determine $\delta(\overleftrightarrow c)$ , the accuracy (depending on $\epsilon$ ) of the approximation of $c$ with $\overleftrightarrow c$ .
(d) Assume that the sequence $\{a_n\}$ satisfies $a_1=0.72$ and $a_{n+1}=f(a_n)$ for $n\in\mathbb N$ . Find the smallest $n_0\in\mathbb N$ , such that for every $n\ge n_0$ we have $|a_n-c|<10^{-6}$ .
