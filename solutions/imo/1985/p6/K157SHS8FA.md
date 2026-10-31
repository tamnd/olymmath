---
tag: K157SHS8FA
kind: solution
problem: SM54M73ECF
origin: human
author:
  display: hrkrshnn
source: mathse
url: https://math.stackexchange.com/a/856410
zone: Z1
lang: en
complete: false
---
Assume that there is some $x_1$ such that $0<x_n<x_{n+1}<1$ then $\{x_n\}$ is monotonically increasing and bounded. Hence converges by [monotone convergence theorem](http://en.wikipedia.org/wiki/Monotone_convergence_theorem). 

Let $\lim\limits_{n\rightarrow \infty}{x_n}=l$, then obtain $l^2=l \Rightarrow l=0,1$, we can readily omit $0$ and hence $x_n\rightarrow 1$.


----------
**Proof for *uniqueness*** of $x_1$.

Assume for the first term $x_1$ and $a_1$, the sequence $\{x_n\}$ and $\{a_n\}$ converges. Without loss of generality assume $x_1>a_1$(Recall that the definition states that all terms of the sequence are positive). Using induction we can prove that $x_n>a_n \quad\forall n\in \mathbb{N}$.

As $x_n$ and $a_n$ both converges to $1$, there exits an $N$ such that for all $n\ge N\implies \frac{3}{4}<a_n<x_n<1 $ (Take $\varepsilon=\frac{1}{4}$)

Observe that $$x_{n+1}-a_{n+1}=\left(x_n-a_n\right)\left(x_n+a_n\right)+\frac{1}{n}\left(x_n-a_n\right)>\frac{3}{2}(x_n-a_n)$$

Hence $$\begin{array}{rcl}\frac{x_{n+1}-a_{n+1}}{x_n-a_n}&>&\frac{3}{2}\implies\\
x_{n+1}-a_{n+1}&>&\left(\frac{3}{2}\right)^{n+1-N}\cdot(x_N-a_N) \\ \end{array}$$

The divergence of $x_n-a_n$ is clear. A contradiction.



----------
**To prove the *existence***, denote $f_{1}(x)=x$ and $f_{n+1}(x)=f_{n}(x)\left(f_{n}(x)+\frac{1}{n}\right)$. Using induction prove that $f_{n}(x)$ is a *strictly increasing* function in $x$. 

Let $b_n$, $c_n$ be such that $f_{n}(b_n)=1-\frac{1}{n}$ and $f_{n}(c_n)=1$, the existence and uniqueness of $b_n$, $c_n$ follows from monotonicity of $f_n$, the observations $f_{n}(0)=0$, $f_{n}(1)>1$ and the continuity of $f_{n}$. Also observe that $b_n<c_n$ and using induction that $b_n$ is *strictly increasing* and $c_n$ is *strictly decreasing* sequences.

The set $A=\{b_n\}$ is bounded above. Hence by [least upper bound property of $\mathbb{R}$](http://en.wikipedia.org/wiki/Least-upper-bound_property) there exists a $\gamma =\sup \{b_n\}$. We shall show that $\gamma$ is indeed our $x_1$!

$$\color{blue}{f_{n+1}{(\gamma)}}=f_{n}(\gamma)\left(f_n{(\gamma)}+\frac{1}{n}\right)\color{blue}{>}f_{n}(\gamma)\left(f_{n}(b_n)+\frac{1}{n}\right)=\color{blue}{f_{n}(\gamma)>0}$$
$$\color{blue}{1}=f_{n}(c_{n})\color{blue}{>f_{n}(\gamma)} \quad \forall n $$ $$\implies 1>f_{n+1}{(\gamma)}>f_{n}(\gamma)>0 \qquad \square$$

----------
**Proofs of interest**

$f_n(x)$ has non negative integer coefficients hence $f_n(x)$ is *strictly increasing* on $[0,1]$.

Notice that $\color{blue}{f_{n+1}(b_n)}=f_{n}(b_n)\left(f_{n}(b_n)+\frac{1}{n}\right)=1-\frac{1}{n}\color{blue}{<}1-\frac{1}{n+1}=\color{blue}{f_{n+1}(b_{n+1})} \implies b_n< b_{n+1}$ or $b_n$ is a *strictly increasing* sequence.

Notice that $\color{blue}{f_{n+1}(c_n)}=f_{n}(c_n)\left(f_{n}(c_n)+\frac{1}{n}\right)=1+\frac{1}{n}\color{blue}{>}1=\color{blue}{f_{n+1}(c_{n+1})} \implies c_{n+1}<c_n$ or $c_n$ is a *strictly decreasing* sequence.

The fact that $b_n$ is bounded is clear as $b_n<c_1 \quad \forall n$.
