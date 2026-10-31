---
tag: Q6WHJ9CTSE
kind: solution
problem: AD8Z9SET71
origin: human
author:
  display: Sameer Kailasa
source: mathse
url: https://math.stackexchange.com/a/2867528
zone: Z1
lang: en
complete: false
---
Here is a proof of the result, via an (famous/very clever/pretty) idea James McKay used to prove Cauchy's theorem.

Let $S$ denote the set of $p$-tuples $(a_1, a_2, \cdots, a_p)$ where $a_i \in G$ and $a_1 a_2 a_3 \cdots a_p = 1$. Note that $\mathbb{Z}/p\mathbb{Z}$ acts on $S$ by cyclic rotations. Thus, we have $$|S| = \#\{\text{orbits of size 1}\} + \#\{\text{orbits of size p}\} \cdot p $$ Orbits of size 1 correspond to tuples of the form $(x, x, x, \cdots, x)$, i.e. elements $x\in G$ of order $p$, excepting the orbit corresponding to the trivial tuple $(1, 1, 1, \cdots 1)$. Thus, $$\#\{\text{orbits of size 1}\} = \#\{\text{elements of order }p\} + 1 = n+1$$ On the other hand, note that $|S| = |G|^{p-1}$ because the first $p-1$ elements of any $p$-tuple can be chosen totally arbitrarily, and then the last element of the tuple is fixed. Taking the equation for $|S|$ modulo $p$, we see that if $p$ divides $|G|$, then $p$ divides $n+1$, as desired.
