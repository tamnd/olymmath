# Sample of canonical statements against imo-official

Made by `om sample -n 200 -seed 1 imo-official`. The frame is each IMO and ISL problem whose position has a text in an official English paper. The sample has 200 problems.

For each problem, the report compares the canonical text with the text of the paper. The order signal is the share of the words that occur in the same order in both texts. The numbers agree when the two texts have the same set of numbers.

- exact: the order signal is at least 0.9 and the numbers agree.
- agrees: the order signal is at least 0.6 and the numbers agree.
- check: a person compares the two texts.

| Verdict | Problems |
|---|---|
| exact | 126 |
| agrees | 28 |
| check | 46 |

## Problems

| Problem | Order | Numbers | Verdict | Numbers in one text only |
|---|---|---|---|---|
| imo/1960/p1 | 1.00 | agree | exact |  |
| imo/1961/p3 | 0.86 | agree | agrees |  |
| imo/1962/p2 | 1.00 | agree | exact |  |
| imo/1962/p6 | 0.96 | agree | exact |  |
| imo/1963/p3 | 1.00 | agree | exact |  |
| imo/1964/p4 | 1.00 | agree | exact |  |
| imo/1964/p6 | 0.94 | differ | check | text:2 |
| imo/1965/p1 | 0.86 | agree | agrees |  |
| imo/1965/p3 | 1.00 | agree | exact |  |
| imo/1965/p5 | 0.91 | agree | exact |  |
| imo/1966/p1 | 0.99 | agree | exact |  |
| imo/1966/p2 | 0.92 | agree | exact |  |
| imo/1966/p4 | 0.84 | agree | agrees |  |
| imo/1967/p3 | 0.93 | agree | exact |  |
| imo/1968/p1 | 0.59 | agree | check |  |
| imo/1969/p5 | 0.78 | agree | agrees |  |
| imo/1970/p5 | 0.71 | differ | check | text:90 |
| imo/1971/p1 | 0.38 | agree | check |  |
| imo/1971/p5 | 0.60 | agree | agrees |  |
| imo/1971/p6 | 0.74 | agree | agrees |  |
| imo/1972/p1 | 0.84 | agree | agrees |  |
| imo/1973/p2 | 0.44 | agree | check |  |
| imo/1975/p4 | 1.00 | differ | check | paper:44444444 text:4444 |
| imo/1976/p4 | 0.57 | agree | check |  |
| imo/1977/p1 | 0.77 | differ | check | text:12 |
| imo/1977/p2 | 1.00 | agree | exact |  |
| imo/1979/p2 | 0.43 | agree | check |  |
| imo/1982/p4 | 0.96 | agree | exact |  |
| imo/1982/p5 | 0.97 | agree | exact |  |
| imo/1982/p6 | 0.97 | differ | check | text:3 |
| imo/1984/p4 | 0.93 | agree | exact |  |
| imo/1985/p4 | 0.90 | differ | check | paper:26 text:23 text:4 |
| imo/1986/p6 | 0.81 | agree | agrees |  |
| imo/1987/p1 | 0.65 | differ | check | text:2 text:3 |
| imo/1987/p6 | 0.92 | agree | exact |  |
| imo/1988/p4 | 0.73 | agree | agrees |  |
| imo/1989/p2 | 0.63 | differ | check | text:2 text:4 |
| imo/1989/p4 | 1.00 | agree | exact |  |
| imo/1989/p5 | 1.00 | agree | exact |  |
| imo/1994/p3 | 0.76 | differ | check | paper:3 |
| imo/1995/p1 | 1.00 | agree | exact |  |
| imo/1995/p2 | 1.00 | agree | exact |  |
| imo/1997/p2 | 0.60 | agree | check |  |
| imo/1998/p2 | 0.60 | agree | agrees |  |
| imo/1998/p4 | 0.52 | differ | check | text:98 |
| imo/1999/p4 | 0.44 | differ | check | text:99 |
| imo/2000/p6 | 0.42 | agree | check |  |
| imo/2002/p2 | 0.38 | differ | check | paper:6 paper:60 text:02 text:120 |
| imo/2006/p5 | 1.00 | agree | exact |  |
| imo/2008/p3 | 0.68 | differ | check | paper:10 paper:2008 paper:22 paper:49 |
| imo/2008/p6 | 0.94 | agree | exact |  |
| imo/2009/p1 | 1.00 | agree | exact |  |
| imo/2012/p1 | 0.97 | agree | exact |  |
| imo/2013/p4 | 0.89 | agree | agrees |  |
| imo/2013/p5 | 0.95 | agree | exact |  |
| imo/2013/p6 | 0.98 | agree | exact |  |
| imo/2014/p5 | 0.94 | differ | check | paper:21 text:12 |
| imo/2017/p3 | 0.96 | differ | check | paper:109 paper:2 text:10 text:9 |
| imo/2018/p4 | 0.98 | agree | exact |  |
| imo/2019/p3 | 0.96 | differ | check | paper:2 |
| imo/2019/p4 | 0.74 | agree | agrees |  |
| imo/2019/p5 | 0.95 | agree | exact |  |
| imo/2021/p4 | 0.88 | agree | agrees |  |
| imo/2022/p6 | 0.98 | agree | exact |  |
| imo/2023/p1 | 1.00 | agree | exact |  |
| imo/2024/p1 | 1.00 | agree | exact |  |
| imo/2024/p3 | 0.97 | agree | exact |  |
| imo/2024/p6 | 1.00 | agree | exact |  |
| imo/2025/p1 | 1.00 | agree | exact |  |
| imo/2025/p3 | 0.95 | differ | check | paper:2 |
| imo/2025/p5 | 0.99 | differ | check | paper:21 paper:22 |
| imo/2026/p3 | 0.98 | differ | check | paper:2 |
| imo/2026/p5 | 1.00 | agree | exact |  |
| isl/2006/a5 | 1.00 | agree | exact |  |
| isl/2006/c6 | 0.99 | agree | exact |  |
| isl/2006/g7 | 0.96 | agree | exact |  |
| isl/2006/n3 | 0.91 | agree | exact |  |
| isl/2006/n5 | 0.92 | agree | exact |  |
| isl/2006/n7 | 0.96 | agree | exact |  |
| isl/2007/a1 | 0.90 | agree | agrees |  |
| isl/2007/c1 | 0.96 | agree | exact |  |
| isl/2007/c5 | 0.99 | agree | exact |  |
| isl/2007/c7 | 0.98 | differ | check | text:3 text:5 |
| isl/2007/c8 | 0.99 | differ | check | paper:23 text:2 text:3 |
| isl/2007/n2 | 0.94 | agree | exact |  |
| isl/2007/n4 | 0.81 | differ | check | paper:23 text:3 |
| isl/2008/a5 | 0.95 | agree | exact |  |
| isl/2008/a7 | 1.00 | agree | exact |  |
| isl/2008/c1 | 0.99 | differ | check | paper:6 |
| isl/2008/c3 | 0.99 | agree | exact |  |
| isl/2008/c6 | 1.00 | agree | exact |  |
| isl/2008/g1 | 0.99 | agree | exact |  |
| isl/2009/a4 | 0.94 | agree | exact |  |
| isl/2009/c5 | 1.00 | agree | exact |  |
| isl/2009/c7 | 0.99 | agree | exact |  |
| isl/2009/c8 | 0.98 | differ | check | paper:2009 paper:50 |
| isl/2009/g2 | 0.98 | agree | exact |  |
| isl/2009/g4 | 0.98 | agree | exact |  |
| isl/2009/g7 | 0.82 | differ | check | paper:2009 paper:50 |
| isl/2009/n5 | 0.93 | differ | check | paper:2009 paper:50 |
| isl/2010/a3 | 1.00 | differ | check | paper:25 |
| isl/2010/a8 | 0.80 | differ | check | paper:1 |
| isl/2010/c1 | 0.99 | agree | exact |  |
| isl/2010/g1 | 0.95 | agree | exact |  |
| isl/2010/g3 | 0.96 | agree | exact |  |
| isl/2010/g4 | 0.90 | agree | exact |  |
| isl/2010/n3 | 0.87 | agree | agrees |  |
| isl/2011/a1 | 1.00 | agree | exact |  |
| isl/2011/a3 | 1.00 | agree | exact |  |
| isl/2011/c7 | 0.95 | agree | exact |  |
| isl/2011/n1 | 1.00 | agree | exact |  |
| isl/2011/n2 | 1.00 | agree | exact |  |
| isl/2011/n7 | 1.00 | agree | exact |  |
| isl/2012/c3 | 1.00 | agree | exact |  |
| isl/2012/c4 | 1.00 | agree | exact |  |
| isl/2012/c5 | 1.00 | agree | exact |  |
| isl/2012/c6 | 1.00 | agree | exact |  |
| isl/2012/g1 | 0.99 | agree | exact |  |
| isl/2012/g3 | 0.93 | agree | exact |  |
| isl/2012/g6 | 0.96 | agree | exact |  |
| isl/2013/a2 | 0.97 | agree | exact |  |
| isl/2013/a6 | 0.90 | agree | exact |  |
| isl/2013/c4 | 0.99 | agree | exact |  |
| isl/2013/g1 | 0.98 | agree | exact |  |
| isl/2013/g2 | 0.95 | agree | exact |  |
| isl/2013/g5 | 0.92 | agree | exact |  |
| isl/2013/n2 | 0.97 | agree | exact |  |
| isl/2013/n4 | 0.98 | agree | exact |  |
| isl/2013/n5 | 0.99 | differ | check | paper:1 |
| isl/2013/n6 | 0.93 | agree | exact |  |
| isl/2014/a3 | 0.98 | agree | exact |  |
| isl/2014/a5 | 0.94 | agree | exact |  |
| isl/2014/a6 | 0.78 | agree | agrees |  |
| isl/2014/c2 | 0.99 | agree | exact |  |
| isl/2014/c4 | 0.87 | agree | agrees |  |
| isl/2014/c6 | 1.00 | agree | exact |  |
| isl/2014/c9 | 1.00 | agree | exact |  |
| isl/2014/g6 | 0.97 | agree | exact |  |
| isl/2014/n1 | 0.98 | agree | exact |  |
| isl/2014/n8 | 0.98 | agree | exact |  |
| isl/2015/a4 | 0.92 | agree | exact |  |
| isl/2015/c4 | 0.97 | differ | check | paper:5 |
| isl/2015/c7 | 1.00 | agree | exact |  |
| isl/2015/g6 | 0.94 | differ | check | paper:900 text:90 |
| isl/2015/n4 | 0.92 | agree | exact |  |
| isl/2015/n5 | 0.98 | agree | exact |  |
| isl/2016/c2 | 1.00 | agree | exact |  |
| isl/2016/c3 | 0.57 | differ | check | text:4 |
| isl/2016/c5 | 1.00 | agree | exact |  |
| isl/2016/c6 | 1.00 | agree | exact |  |
| isl/2016/c7 | 1.00 | agree | exact |  |
| isl/2016/g2 | 0.94 | agree | exact |  |
| isl/2016/g3 | 0.99 | agree | exact |  |
| isl/2016/g8 | 0.95 | agree | exact |  |
| isl/2016/n3 | 1.00 | agree | exact |  |
| isl/2016/n5 | 1.00 | agree | exact |  |
| isl/2016/n7 | 1.00 | agree | exact |  |
| isl/2017/a2 | 0.86 | agree | agrees |  |
| isl/2017/c2 | 0.65 | agree | agrees |  |
| isl/2017/c4 | 0.93 | agree | exact |  |
| isl/2017/g8 | 0.79 | differ | check | paper:9 |
| isl/2017/n2 | 0.88 | agree | agrees |  |
| isl/2017/n6 | 0.87 | agree | agrees |  |
| isl/2017/n7 | 0.83 | agree | agrees |  |
| isl/2018/c7 | 0.70 | agree | agrees |  |
| isl/2018/n2 | 0.75 | agree | agrees |  |
| isl/2019/a3 | 0.32 | differ | check | text:0 text:4 |
| isl/2019/a5 | 0.64 | differ | check | paper:5 |
| isl/2019/a7 | 0.96 | agree | exact |  |
| isl/2019/c4 | 0.97 | agree | exact |  |
| isl/2019/n4 | 0.93 | agree | exact |  |
| isl/2019/n7 | 0.89 | agree | agrees |  |
| isl/2019/n8 | 0.97 | agree | exact |  |
| isl/2020/a1 | 0.98 | agree | exact |  |
| isl/2020/a4 | 0.95 | agree | exact |  |
| isl/2020/a6 | 0.78 | differ | check | paper:5 |
| isl/2020/a7 | 0.95 | agree | exact |  |
| isl/2020/a8 | 0.89 | agree | agrees |  |
| isl/2020/g3 | 0.90 | agree | exact |  |
| isl/2020/n5 | 0.88 | agree | agrees |  |
| isl/2021/a1 | 1.00 | agree | exact |  |
| isl/2021/a7 | 1.00 | agree | exact |  |
| isl/2021/a8 | 0.72 | agree | agrees |  |
| isl/2021/c5 | 1.00 | agree | exact |  |
| isl/2021/c6 | 0.99 | differ | check | paper:7 |
| isl/2021/c7 | 0.94 | agree | exact |  |
| isl/2021/g2 | 0.95 | agree | exact |  |
| isl/2021/n2 | 1.00 | agree | exact |  |
| isl/2021/n5 | 1.00 | agree | exact |  |
| isl/2021/n7 | 1.00 | agree | exact |  |
| isl/2022/a6 | 0.92 | agree | exact |  |
| isl/2022/c5 | 0.93 | agree | exact |  |
| isl/2022/g1 | 0.96 | agree | exact |  |
| isl/2022/g2 | 0.95 | agree | exact |  |
| isl/2022/g6 | 0.98 | agree | exact |  |
| isl/2022/n6 | 0.94 | agree | exact |  |
| isl/2023/c2 | 0.97 | differ | check | paper:22023 text:2 text:2023 |
| isl/2023/c4 | 0.97 | agree | exact |  |
| isl/2023/c7 | 0.98 | differ | check | paper:7 |
| isl/2023/n6 | 0.96 | agree | exact |  |

## Texts to check

The text of the paper comes from the text layer of the PDF, so it can lose superscripts, symbols and letters.

### imo/1964/p6

Paper:

```text
In tetrahedron ABCD, vertex D is connected with D0 the centroid of ∆ABC. Lines parallel to DD0 are drawn through A, B and C. These lines intersect the planes BCD, CAD and ABD in points A1 , B1 and C1 , respectively. Prove that the volume of ABCD is one third the volume of A1 B1 C1 D0 . Is the result true if point D0 is selected anywhere within ∆ABC?
```

Canonical text:

```text
In tetrahedron $ABCD$ , vertex $D$ is connected with $D_0$ , the centrod if $\triangle ABC$ . Line parallel to $DD_0$ are drawn through $A,B$ and $C$ . These lines intersect the planes $BCD, CAD$ and $ABD$ in points $A_2, B_1,$ and $C_1$ , respectively. Prove that the volume of $ABCD$ is one third the volume of $A_1B_1C_1D_0$ . Is the result if point $D_o$ is selected anywhere within $\triangle ABC$ ?
```

### imo/1968/p1

Paper:

```text
Prove that there is one and only one triangle whose side lengths are consec- utive integers, and one of whose angles is twice as large as another.
```

Canonical text:

```text
Find all triangles whose side lengths are consecutive integers, and one of whose angles is twice another.
```

### imo/1970/p5

Paper:

```text
In the tetrahedron ABCD, angle BDC is a right angle. Suppose that the foot H of the perpendicular from D to the plane ABC is the intersection of the altitudes of ∆ABC. Prove that (AB + BC + CA)2 ≤ 6(AD2 + BD2 + CD2 ). For what tetrahedra does equality hold?
```

Canonical text:

```text
In the tetrahedron $ABCD,\angle BDC=90^o$ and the foot of the perpendicular from $D$ to $ABC$ is the intersection of the altitudes of $ABC$ . Prove that: $$ (AB+BC+CA)^2\le6(AD^2+BD^2+CD^2). $$ When do we have equality?
```

### imo/1971/p1

Paper:

```text
Prove that the following assertion is true for n = 3 and n = 5, and that it is false for every other natural number n > 2 : If a1 , a2 , ..., an are arbitrary real numbers, then (a1 − a2 )(a1 − a3 ) · · · (a1 − an ) + (a2 − a1 )(a2 − a3 ) · · · (a2 − an ) + · · · + (an − a1 )(an − a2 ) · · · (an − an−1 ) ≥ 0
```

Canonical text:

```text
Let $$ E_n=(a_1-a_2)(a_1-a_3)\ldots(a_1-a_n)+(a_2-a_1)(a_2-a_3)\ldots(a_2-a_n)+\ldots+(a_n-a_1)(a_n-a_2)\ldots(a_n-a_{n-1}). $$ Let $S_n$ be the proposition that $E_n\ge0$ for all real $a_i$ . Prove that $S_n$ is true for $n=3$ and $5$ , but for no other $n>2$ .
```

### imo/1973/p2

Paper:

```text
Determine whether or not there exists a finite set M of points in space not lying in the same plane such that, for any two points A and B of M, one can select two other points C and D of M so that lines AB and CD are parallel and not coincident.
```

Canonical text:

```text
Establish if there exists a finite set $M$ of points in space, not all situated in the same plane, so that for any straight line $d$ which contains at least two points from M there exists another straight line $d'$ , parallel with $d,$ but distinct from $d$ , which also contains at least two points from $M$ .
```

### imo/1975/p4

Paper:

```text
When 44444444 is written in decimal notation, the sum of its digits is A. Let B be the sum of the digits of A. Find the sum of the digits of B. (A and B are written in decimal notation.)
```

Canonical text:

```text
When $4444^{4444}$ is written in decimal notation, the sum of its digits is $ A.$ Let $B$ be the sum of the digits of $A.$ Find the sum of the digits of $ B.$ ( $A$ and $B$ are written in decimal notation.)
```

### imo/1976/p4

Paper:

```text
Determine, with proof, the largest number which is the product of positive integers whose sum is 1976.
```

Canonical text:

```text
Determine the greatest number, who is the product of some positive integers, and the sum of these numbers is $1976.$
```

### imo/1977/p1

Paper:

```text
Equilateral triangles ABK, BCL, CDM, DAN are constructed inside the square ABCD. Prove that the midpoints of the four segments KL, LM, M N, N K and the midpoints of the eight segments AKBK, BL, CL, CM, DM, DN, AN are the twelve vertices of a regular dodecagon.
```

Canonical text:

```text
In the interior of a square $ABCD$ we construct the equilateral triangles $ABK, BCL, CDM, DAN.$ Prove that the midpoints of the four segments $KL, LM, MN, NK$ and the midpoints of the eight segments $AK, BK, BL, CL, CM, DM, DN, AN$ are the 12 vertices of a regular dodecagon.
```

### imo/1979/p2

Paper:

```text
A prism with pentagons A1 A2 A3 A4 A5 and B1 B2 B3 B4 B5 as top and bottom faces is given. Each side of the two pentagons and each of the line- segments Ai Bj for all i, j = 1, ..., 5, is colored either red or green. Every triangle whose vertices are vertices of the prism and whose sides have all been colored has two sides of a different color. Show that all 10 sides of the top and bottom faces are the same color.
```

Canonical text:

```text
We consider a prism which has the upper and inferior basis the pentagons: $A_{1}A_{2}A_{3}A_{4}A_{5}$ and $B_{1}B_{2}B_{3}B_{4}B_{5}$ . Each of the sides of the two pentagons and the segments $A_{i}B_{j}$ with $i,j=1,\ldots$ ,5 is colored in red or blue. In every triangle which has all sides colored there exists one red side and one blue side. Prove that all the 10 sides of the two basis are colored in the same color.
```

### imo/1982/p6

Paper:

```text
Let S be a square with sides of length 100, and let L be a path within S which does not meet itself and which is composed of line segments A0 A1 , A1 A2 , · · · , An−1 An with A0 6= An . Suppose that for every point P of the boundary of S there is a point of L at a distance from P not greater than 1/2. Prove that there are two points X and Y in L such that the distance between X and Y is not greater than 1, and the length of that part of L which lies between X and Y is not smaller than 198.
```

Canonical text:

```text
Let $S$ be a square with sides length $100$ . Let $L$ be a path within $S$ which does not meet itself and which is composed of line segments $A_0A_1,A_1A_2,A_2A_3,\ldots,A_{n-1}A_n$ with $A_0=A_n$ . Suppose that for every point $P$ on the boundary of $S$ there is a point of $L$ at a distance from $P$ no greater than $\frac {1} {2}$ . Prove that there are two points $X$ and $Y$ of $L$ such that the distance between $X$ and $Y$ is not greater than $1$ and the length of the part of $L$ which lies between $X$ and $Y$ is not smaller than $198$ .
```

### imo/1985/p4

Paper:

```text
Given a set M of 1985 distinct positive integers, none of which has a prime divisor greater than 26. Prove that M contains at least one subset of four distinct elements whose product is the fourth power of an integer.
```

Canonical text:

```text
Given a set $M$ of $1985$ distinct positive integers, none of which has a prime divisor greater than $23$ , prove that $M$ contains a subset of $4$ elements whose product is the $4$ th power of an integer.
```

### imo/1987/p1

Paper:

```text
Let pn (k) be the number of permutations of the set {1, . . . , n}, n ≥ 1, which have exactly k fixed points. Prove that n X k · pn (k) = n!. k=0 (Remark: A permutation f of a set S is a one-to-one mapping of S onto itself. An element i in S is called a fixed point of the permutation f if f (i) = i.)
```

Canonical text:

```text
Let $p_n(k)$ be the number of permutations of the set $\{1,2,3,\ldots,n\}$ which have exactly $k$ fixed points. Prove that $\sum_{k=0}^nk p_n(k)=n!$ .
```

### imo/1989/p2

Paper:

```text
In an acute-angled triangle ABC the internal bisector of angle A meets the circumcircle of the triangle again at A1 . Points B1 and C1 are defined similarly. Let A0 be the point of intersection of the line AA1 with the external bisectors of angles B and C. Points B0 and C0 are defined similarly. Prove that: (i) The area of the triangle A0 B0 C0 is twice the area of the hexagon AC1 BA1 CB1 . (ii) The area of the triangle A0 B0 C0 is at least four times the area of the triangle ABC.
```

Canonical text:

```text
$ ABC$ is a triangle, the bisector of angle $ A$ meets the circumcircle of triangle $ ABC$ in $ A_1$ , points $ B_1$ and $ C_1$ are defined similarly. Let $ AA_1$ meet the lines that bisect the two external angles at $ B$ and $ C$ in $ A_0$ . Define $ B_0$ and $ C_0$ similarly. Prove that the area of triangle $ A_0B_0C_0 = 2 \cdot$ area of hexagon $ AC_1BA_1CB_1 \geq 4 \cdot$ area of triangle $ ABC$ .
```

### imo/1994/p3

Paper:

```text
E lies on the line AB and F lies on the line AC such that E, Q, F are distinct and collinear. Prove that OQ is perpendicular to EF if and only if QE = QF . 3. For any positive integer k, let f (k) be the number of elements in the set {k + 1, k + 2, . . . , 2k} whose base 2 representation has precisely three 1s. • (a) Prove that, for each positive integer m, there exists at least one positive integer k such that f (k) = m. • (b) Determine all positive integers m for which there exists exactly one k with f (k) = m.
```

Canonical text:

```text
For any positive integer $ k$ , let $ f_k$ be the number of elements in the set $ \{ k + 1, k + 2, \ldots, 2k\}$ whose base 2 representation contains exactly three 1s.

(a) Prove that for any positive integer $ m$ , there exists at least one positive integer $ k$ such that $ f(k) = m$ .

(b) Determine all positive integers $ m$ for which there exists *exactly one* $ k$ with $ f(k) = m$ .
```

### imo/1997/p2

Paper:

```text
The angle at A is the smallest angle of triangle ABC. The points B and C divide the circumcircle of the triangle into two arcs. Let U be an interior point of the arc between B and C which does not contain A. The perpendicular bisectors of AB and AC meet the line AU at V and W , respectively. The lines BV and CW meet at T . Show that AU = T B + T C.
```

Canonical text:

```text
It is known that $ \angle BAC$ is the smallest angle in the triangle $ ABC$ . The points $ B$ and $ C$ divide the circumcircle of the triangle into two arcs. Let $ U$ be an interior point of the arc between $ B$ and $ C$ which does not contain $ A$ . The perpendicular bisectors of $ AB$ and $ AC$ meet the line $ AU$ at $ V$ and $ W$ , respectively. The lines $ BV$ and $ CW$ meet at $ T$ .

Show that $ AU = TB + TC$ .

*Alternative formulation:*

Four different points $ A,B,C,D$ are chosen on a circle $ \Gamma$ such that the triangle $ BCD$ is not right-angled. Prove that:

(a) The perpendicular bisectors of $ AB$ and $ AC$ meet the line $ AD$ at certain points $ W$ and $ V,$ respectively, and that the lines $ CV$ and $ BW$ meet at a certain point $ T.$

(b) The length of one of the line segments $ AD, BT,$ and $ CT$ is the sum of the lengths of the other two.
```

### imo/1998/p4

Paper:

```text
Determine all pairs (a, b) of positive integers such that ab2 + b + 7 divides a2 b + a + b.
```

Canonical text:

```text
Determine all pairs $(x,y)$ of positive integers such that $x^{2}y+x+y$ is divisible by $xy^{2}+y+7$ .

**Attachments:**

![IMO98.gif](https://cdn.artofproblemsolving.com/attachments/9/3/7cb40b53dfdd702ca29dad0ef7f54473b37b18.gif)
```

### imo/1999/p4

Paper:

```text
Determine all pairs (n, p) of positive integers such that p is a prime, n not exceeded 2p, and (p − 1)n + 1 is divisible by np−1 .
```

Canonical text:

```text
Find all the pairs of positive integers $(x,p)$ such that p is a prime, $x \leq 2p$ and $x^{p-1}$ is a divisor of $ (p-1)^{x}+1$ .

**Attachments:**

![imo99lgo.gif](https://cdn.artofproblemsolving.com/attachments/f/5/df057efd721c49654404adc2be5aa0ace32457.gif)
```

### imo/2000/p6

Paper:

```text
A1 A2 A3 is an acute-angled triangle. The foot of the altitude from Ai is Ki and the incircle touches the side opposite Ai at Li . The line K1 K2 is reflected in the line L1 L2 . Similarly, the line K2 K3 is reflected in L2 L3 and K3 K1 is reflected in L3 L1 . Show that the three new lines form a triangle with vertices on the incircle. 1
```

Canonical text:

```text
Let $ AH_1, BH_2, CH_3$ be the altitudes of an acute angled triangle $ ABC$ . Its incircle touches the sides $ BC, AC$ and $ AB$ at $ T_1, T_2$ and $ T_3$ respectively. Consider the symmetric images of the lines $ H_1H_2, H_2H_3$ and $ H_3H_1$ with respect to the lines $ T_1T_2, T_2T_3$ and $ T_3T_1$ . Prove that these images form a triangle whose vertices lie on the incircle of $ ABC$ .
```

### imo/2002/p2

Paper:

```text
BC is a diameter of a circle center O. A is any point on the circle with 6 AOC > 60o . EF is the chord which is the perpendicular bisector of AO. D is the midpoint of the minor arc AB. The line through O parallel to AD meets AC at J. Show that J is the incenter of triangle CEF .
```

Canonical text:

```text
The circle $S$ has centre $O$ , and $BC$ is a diameter of $S$ . Let $A$ be a point of $S$ such that $\angle AOB<120{{}^\circ}$ . Let $D$ be the midpoint of the arc $AB$ which does not contain $C$ . The line through $O$ parallel to $DA$ meets the line $AC$ at $I$ . The perpendicular bisector of $OA$ meets $S$ at $E$ and at $F$ . Prove that $I$ is the incentre of the triangle $CEF.$ **Attachments:**

![logo02.gif](https://cdn.artofproblemsolving.com/attachments/c/d/0095fa6b8e6357ce54c47c7a73883d89124d21.gif)
```

### imo/2008/p3

Paper:

```text
Prove that there exist √ infinitely many positive integers n such that n + 1 has a prime divisor which is greater than 2n + 2n. 49th INTERNATIONAL MATHEMATICAL OLYMPIAD MADRID (SPAIN), JULY 10-22, 2008
```

Canonical text:

```text
Prove that there are infinitely many positive integers $ n$ such that $ n^{2} + 1$ has a prime divisor greater than $ 2n + \sqrt {2n}$ .

*Author: Kestutis Cesnavicius, Lithuania*
```

### imo/2014/p5

Paper:

```text
For each positive integer n, the Bank of Cape Town issues coins of denomination n1 . Given a nite collection of such coins (of not necessarily dierent denominations) with total value at most 99 + 21 , prove that it is possible to split this collection into 100 or fewer groups, such that each group has total value at most 1.
```

Canonical text:

```text
For each positive integer $n$ , the Bank of Cape Town issues coins of denomination $\frac1n$ . Given a finite collection of such coins (of not necessarily different denominations) with total value at most most $99+\frac12$ , prove that it is possible to split this collection into $100$ or fewer groups, such that each group has total value at most $1$ .
```

### imo/2017/p3

Paper:

```text
A hunter and an invisible rabbit play a game in the Euclidean plane. The rabbit’s starting point, A0 , and the hunter’s starting point, B0 , are the same. After n − 1 rounds of the game, the rabbit is at point An−1 and the hunter is at point Bn−1 . In the nth round of the game, three things occur in order. (i) The rabbit moves invisibly to a point An such that the distance between An−1 and An is exactly 1. (ii) A tracking device reports a point Pn to the hunter. The only guarantee provided by the tracking device to the hunter is that the distance between Pn and An is at most 1. (iii) The hunter moves visibly to a point Bn such that the distance between Bn−1 and Bn is exactly 1. Is it always possible, no matter how the rabbit moves, and no matter what points are reported by the tracking device, for the hunter to choose her moves so that after 109 rounds she can ensure that the distance between her and the rabbit is at most 100? English (eng), day 2
```

Canonical text:

```text
A hunter and an invisible rabbit play a game in the Euclidean plane. The rabbit's starting point, $A_0,$ and the hunter's starting point, $B_0$ are the same. After $n-1$ rounds of the game, the rabbit is at point $A_{n-1}$ and the hunter is at point $B_{n-1}.$ In the $n^{\text{th}}$ round of the game, three things occur in order:

[list=i]
[*]The rabbit moves invisibly to a point $A_n$ such that the distance between $A_{n-1}$ and $A_n$ is exactly $1.$ [*]A tracking device reports a point $P_n$ to the hunter. The only guarantee provided by the tracking device to the hunter is that the distance between $P_n$ and $A_n$ is at most $1.$ [*]The hunter moves visibly to a point $B_n$ such that the distance between $B_{n-1}$ and $B_n$ is exactly $1.$ [/list]
Is it always possible, no matter how the rabbit moves, and no matter what points are reported by the tracking device, for the hunter to choose her moves so that after $10^9$ rounds, she can ensure that the distance between her and the rabbit is at most $100?$ *Proposed by Gerhard Woeginger, Austria*
```

### imo/2019/p3

Paper:

```text
A social network has 2019 users, some pairs of whom are friends. Whenever user A is friends with user B, user B is also friends with user A. Events of the following kind may happen repeatedly, one at a time: Three users A, B, and C such that A is friends with both B and C, but B and C are not friends, change their friendship statuses such that B and C are now friends, but A is no longer friends with B, and no longer friends with C. All other friendship statuses are unchanged. Initially, 1010 users have 1009 friends each, and 1009 users have 1010 friends each. Prove that there exists a sequence of such events after which each user is friends with at most one other user. English (eng), day 2
```

Canonical text:

```text
A social network has $2019$ users, some pairs of whom are friends. Whenever user $A$ is friends with user $B$ , user $B$ is also friends with user $A$ . Events of the following kind may happen repeatedly, one at a time:

- Three users $A$ , $B$ , and $C$ such that $A$ is friends with both $B$ and $C$ , but $B$ and $C$ are not friends, change their friendship statuses such that $B$ and $C$ are now friends, but $A$ is no longer friends with $B$ , and no longer friends with $C$ . All other friendship statuses are unchanged.

Initially, $1010$ users have $1009$ friends each, and $1009$ users have $1010$ friends each. Prove that there exists a sequence of such events after which each user is friends with at most one other user.

*Proposed by Adrian Beker, Croatia*
```

### imo/2025/p3

Paper:

```text
Let N denote the set of positive integers. A function f : N → N is said to be bonza if f (a) divides ba − f (b)f (a) for all positive integers a and b. Determine the smallest real constant c such that f (n) ⩽ cn for all bonza functions f and all positive integers n. English (eng), day 2
```

Canonical text:

```text
Let $\mathbb{N}$ denote the set of positive integers. A function $f \colon \mathbb{N} \to \mathbb{N}$ is said to be bonza if

$$f(a) \text{ divides } b^a - f(b)^{f(a)}$$

for all positive integers $a$ and $b$.

Determine the smallest real constant $c$ such that $f(n) \leqslant cn$ for all bonza functions $f$ and all positive integers $n$.
```

### imo/2025/p5

Paper:

```text
Alice and Bazza are playing the inekoalaty game, a two-player game whose rules depend on a positive real number λ which is known to both players. On the nth turn of the game (starting with n = 1) the following happens: • If n is odd, Alice chooses a nonnegative real number xn such that x1 + x2 + · · · + xn ⩽ λn. • If n is even, Bazza chooses a nonnegative real number xn such that x21 + x22 + · · · + x2n ⩽ n. If a player cannot choose a suitable number xn , the game ends and the other player wins. If the game goes on forever, neither player wins. All chosen numbers are known to both players. Determine all values of λ for which Alice has a winning strategy and all those for which Bazza has a winning strategy.
```

Canonical text:

```text
Alice and Bazza are playing the inekoalaty game, a two-player game whose rules depend on a positive real number $\lambda$ which is known to both players. On the $n$th turn of the game (starting with $n = 1$) the following happens:

- If $n$ is odd, Alice chooses a nonnegative real number $x_n$ such that $$x_1 + x_2 + \cdots + x_n \leqslant \lambda n.$$
- If $n$ is even, Bazza chooses a nonnegative real number $x_n$ such that $$x_1^2 + x_2^2 + \cdots + x_n^2 \leqslant n.$$

If a player cannot choose a suitable number $x_n$, the game ends and the other player wins. If the game goes on forever, neither player wins. All chosen numbers are known to both players.

Determine all values of $\lambda$ for which Alice has a winning strategy and all those for which Bazza has a winning strategy.
```

### imo/2026/p3

Paper:

```text
Let n be a positive integer. Liu Bang and Xiang Yu have a stick of length 1 and want to divide it between themselves. Liu marks at most n points on the stick, and then Xiang marks at most n points on the stick. The marked points are distinct. Then, the stick is cut at all marked points, creating a number of pieces. Afterwards, they take turns claiming any unclaimed piece of the stick, with Liu going first. Each player’s goal is to maximise the total length of their own pieces. For each n, determine the largest value c such that Liu may guarantee a total length of at least c, regardless of Xiang’s play. English (eng), day 2
```

Canonical text:

```text
Let $n$ be a positive integer. Liu Bang and Xiang Yu have a stick of length $1$ and want to divide it between themselves. Liu marks at most $n$ points on the stick, and then Xiang marks at most $n$ points on the stick. The marked points are distinct. Then, the stick is cut at all marked points, creating a number of pieces. Afterwards, they take turns claiming any unclaimed piece of the stick, with Liu going first. Each player's goal is to maximise the total length of their own pieces.

For each $n$, determine the largest value $c$ such that Liu may guarantee a total length of at least $c$, regardless of Xiang's play.
```

### isl/2007/c7

Paper:

```text
Let α < be a positive real number. Prove that there exist positive integers n n 2 and p > α · 2 for which one can select 2p pairwise distinct subsets S1 , . . . , Sp , T1 , . . . , Tp of the set {1, 2, . . . , n} such that Si ∩ Tj 6= ∅ for all 1 ≤ i, j ≤ p.
```

Canonical text:

```text
Let $\alpha<\frac{3-\sqrt{5}}{2}$ be a positive real number. Prove that there exist positive integers $n$ and $p>\alpha \cdot 2^{n}$ for which one can select $2 p$ pairwise distinct subsets $S_{1}, \ldots, S_{p}, T_{1}, \ldots, T_{p}$ of the set $\{1,2, \ldots, n\}$ such that $S_{i} \cap T_{j} \neq \varnothing$ for all $1 \leq i, j \leq p$. (Austria)
```

### isl/2007/c8

Paper:

```text
Given a convex n-gon P in the plane. For every three vertices of P , consider the triangle determined by them. Call such a triangle good if all its sides are of unit length. Prove that there are not more than 23 n good triangles.
```

Canonical text:

```text
Given a convex $n$-gon $P$ in the plane. For every three vertices of $P$, consider the triangle determined by them. Call such a triangle good if all its sides are of unit length. Prove that there are not more than $\frac{2}{3} n$ good triangles. (Ukraine)
```

### isl/2007/n4

Paper:

```text
For every integer k ≥ 2, prove that 23k divides the number  k+1  k  2 2 k − k−1 (1) 2 2 but 23k+1 does not.
```

Canonical text:

```text
For every integer $k \geq 2$, prove that $2^{3 k}$ divides the number $$ \left(\begin{array}{c} 2^{k+1} \\ 2^{k} \end{array}\right)-\left(\begin{array}{c} 2^{k} \\ 2^{k-1} \end{array}\right) $$ but $2^{3 k+1}$ does not. (Poland)
```

### isl/2008/c1

Paper:

```text
In the plane we consider rectangles whose sides are parallel to the coordinate axes and have positive length. Such a rectangle will be called a box . Two boxes intersect if they have a common point in their interior or on their boundary. Find the largest n for which there exist n boxes B1 , . . . , Bn such that Bi and Bj intersect if and only if i 6≡ j ± 1 (mod n).
```

Canonical text:

```text
In the plane we consider rectangles whose sides are parallel to the coordinate axes and have positive length. Such a rectangle will be called a box. Two boxes intersect if they have a common point in their interior or on their boundary. Find the largest $n$ for which there exist $n$ boxes $B_{1}, \ldots, B_{n}$ such that $B_{i}$ and $B_{j}$ intersect if and only if $i \not \equiv j \pm 1(\bmod n)$.
```

### isl/2009/c8

Paper:

```text
For any integer n ≥ 2, we compute the integer h(n) by applying the following procedure to its decimal representation. Let r be the rightmost digit of n. (1) If r = 0, then the decimal representation of h(n) results from the decimal representation of n by removing this rightmost digit 0. (2) If 1 ≤ r ≤ 9 we split the decimal representation of n into a maximal right part R that solely consists of digits not less than r and into a left part L that either is empty or ends with a digit strictly smaller than r. Then the decimal representation of h(n) consists of the decimal representation of L, followed by two copies of the decimal representation of R − 1. For instance, for the number n = 17,151,345,543, we will have L = 17,151, R = 345,543 and h(n) = 17,151,345,542,345,542. Prove that, starting with an arbitrary integer n ≥ 2, iterated application of h produces the integer 1 after finitely many steps. Geometry Problem Shortlist 50th IMO 2009
```

Canonical text:

```text
For any integer $n \geq 2$, we compute the integer $h(n)$ by applying the following procedure to its decimal representation. Let $r$ be the rightmost digit of $n$. (1) If $r=0$, then the decimal representation of $h(n)$ results from the decimal representation of $n$ by removing this rightmost digit 0 . (2) If $1 \leq r \leq 9$ we split the decimal representation of $n$ into a maximal right part $R$ that solely consists of digits not less than $r$ and into a left part $L$ that either is empty or ends with a digit strictly smaller than $r$. Then the decimal representation of $h(n)$ consists of the decimal representation of $L$, followed by two copies of the decimal representation of $R-1$. For instance, for the number $n=17,151,345,543$, we will have $L=17,151, R=345,543$ and $h(n)=17,151,345,542,345,542$. Prove that, starting with an arbitrary integer $n \geq 2$, iterated application of $h$ produces the integer 1 after finitely many steps.
```

### isl/2009/g7

Paper:

```text
Let ABC be a triangle with incenter I and let X, Y and Z be the incenters of the triangles BIC, CIA and AIB, respectively. Let the triangle XY Z be equilateral. Prove that ABC is equilateral too. 50th IMO 2009 Problem Shortlist Geometry
```

Canonical text:

```text
Let $A B C$ be a triangle with incenter $I$ and let $X, Y$ and $Z$ be the incenters of the triangles $B I C, C I A$ and $A I B$, respectively. Let the triangle $X Y Z$ be equilateral. Prove that $A B C$ is equilateral too.
```

### isl/2009/n5

Paper:

```text
Let P (x) be a non-constant polynomial with integer coefficients. Prove that there is no function T from the set of integers into the set of integers such that the number of integers x with T n (x) = x is equal to P (n) for every n ≥ 1, where T n denotes the n-fold application of T . 50th IMO 2009 Problem Shortlist Number Theory
```

Canonical text:

```text
Let $P(x)$ be a non-constant polynomial with integer coefficients. Prove that there is no function $T$ from the set of integers into the set of integers such that the number of integers $x$ with $T^{n}(x)=x$ is equal to $P(n)$ for every $n \geq 1$, where $T^{n}$ denotes the $n$-fold application of $T$.
```

### isl/2010/a3

Paper:

```text
Let x1 , . . . , x100 be nonnegative real numbers such that xi xi 1 xi 2 ¨ 1 for all i  1, . . . , 100 (we put x101  x1 , x102  x2 ). Find the maximal possible value of the sum ¸ 100 S xi xi 2 .  i 1 (Russia) 25
```

Canonical text:

```text
Let $x_{1}, \ldots, x_{100}$ be nonnegative real numbers such that $x_{i}+x_{i+1}+x_{i+2} \leq 1$ for all $i=1, \ldots, 100$ (we put $x_{101}=x_{1}, x_{102}=x_{2}$ ). Find the maximal possible value of the sum $$ S=\sum_{i=1}^{100} x_{i} x_{i+2} $$ (Russia)
```

### isl/2010/a8

Paper:

```text
Given six positive numbers a, b, c, d, e, f such that a b c d e f . Let a c e  S and b d f  T . Prove that b  2ST ¡ 3pS T q S pbd bf df q T pac ae ceq . (1)
```

Canonical text:

```text
Given six positive numbers $a, b, c, d, e, f$ such that $a<b<c<d<e<f$. Let $a+c+e=S$ and $b+d+f=T$. Prove that $$ 2 S T>\sqrt{3(S+T)(S(b d+b f+d f)+T(a c+a e+c e))} $$ (South Korea)
```

### isl/2013/n5

Paper:

```text
Fix an integer k ě 2. Two players, called Ana and Banana, play the following game of numbers: Initially, some integer n ě k gets written on the blackboard. Then they take moves in turn, with Ana beginning. A player making a move erases the number m just written on the blackboard and replaces it by some number m1 with k ď m1 ă m that is coprime to m. The first player who cannot move anymore loses. An integer n ě k is called good if Banana has a winning strategy when the initial number is n, and bad otherwise. Consider two integers n, n1 ě k with the property that each prime number p ď k divides n if and only if it divides n1 . Prove that either both n and n1 are good or both are bad.
```

Canonical text:

```text
Fix an integer $k \geqslant 2$. Two players, called Ana and Banana, play the following game of numbers: Initially, some integer $n \geqslant k$ gets written on the blackboard. Then they take moves in turn, with Ana beginning. A player making a move erases the number $m$ just written on the blackboard and replaces it by some number $m^{\prime}$ with $k \leqslant m^{\prime}<m$ that is coprime to $m$. The first player who cannot move anymore loses. An integer $n \geqslant k$ is called good if Banana has a winning strategy when the initial number is $n$, and bad otherwise. Consider two integers $n, n^{\prime} \geqslant k$ with the property that each prime number $p \leqslant k$ divides $n$ if and only if it divides $n^{\prime}$. Prove that either both $n$ and $n^{\prime}$ are good or both are bad. (Italy)
```

### isl/2015/c4

Paper:

```text
Let n be a positive integer. Two players A and B play a game in which they take turns choosing positive integers k ď n. The rules of the game are: piq A player cannot choose a number that has been chosen by either player on any previous turn. piiq A player cannot choose a number consecutive to any of those the player has already chosen on any previous turn. piiiq The game is a draw if all numbers have been chosen; otherwise the player who cannot choose a number anymore loses the game. The player A takes the first turn. Determine the outcome of the game, assuming that both players use optimal strategies. (Finland) Shortlisted problems 5
```

Canonical text:

```text
Let $n$ be a positive integer. Two players $A$ and $B$ play a game in which they take turns choosing positive integers $k \leqslant n$. The rules of the game are: (i) A player cannot choose a number that has been chosen by either player on any previous turn. (ii) A player cannot choose a number consecutive to any of those the player has already chosen on any previous turn. (iii) The game is a draw if all numbers have been chosen; otherwise the player who cannot choose a number anymore loses the game. The player $A$ takes the first turn. Determine the outcome of the game, assuming that both players use optimal strategies. (Finland)
```

### isl/2015/g6

Paper:

```text
Let ABC be an acute triangle with AB ą AC, and let Γ be its circumcircle. Let H, M, and F be the orthocenter of the triangle, the midpoint of BC, and the foot of the altitude from A, respectively. Let Q and K be the two points on Γ that satisfy =AQH “ 900 and =QKH “ 900 . Prove that the circumcircles of the triangles KQH and KF M are tangent to each other.
```

Canonical text:

```text
Let $A B C$ be an acute triangle with $A B>A C$, and let $\Gamma$ be its circumcircle. Let $H$, $M$, and $F$ be the orthocenter of the triangle, the midpoint of $B C$, and the foot of the altitude from $A$, respectively. Let $Q$ and $K$ be the two points on $\Gamma$ that satisfy $\angle A Q H=90^{\circ}$ and $\angle Q K H=90^{\circ}$. Prove that the circumcircles of the triangles $K Q H$ and $K F M$ are tangent to each other. (Ukraine)
```

### isl/2016/c3

Paper:

```text
Let n be a positive integer relatively prime to 6. We paint the vertices of a regular n-gon with three colours so that there is an odd number of vertices of each colour. Show that there exists an isosceles triangle whose three vertices are of different colours.
```

Canonical text:

```text
Let $n$ be a positive integer relatively prime to 6 . We paint the vertices of a regular $n$-gon with three colours so that there is an odd number of vertices of each colour. Show that there exists an isosceles triangle whose three vertices are of different colours. $\mathbf{C 4}$. Find all positive integers $n$ for which we can fill in the entries of an $n \times n$ table with the following properties: - each entry can be one of $I, M$ and $O$; - in each row and each column, the letters $I, M$ and $O$ occur the same number of times; and - in any diagonal whose number of entries is a multiple of three, the letters $I, M$ and $O$ occur the same number of times.
```

### isl/2017/g8

Paper:

```text
There are 2017 mutually external ir les drawn on a bla kboard, su h that no two are tangent and no three share a ommon tangent. A tangent segment is a line segment that is a ommon tangent to two ir les, starting at one tangent point and ending at the other one. Lu iano is drawing tangent segments on the bla kboard, one at a time, so that no tangent segment interse ts any other ir les or previously drawn tangent segments. Lu iano keeps drawing tangent segments until no more an be drawn. Find all possible numbers of tangent segments when he stops drawing. Shortlisted problems 9 This page is intentionally left blank
```

Canonical text:

```text
There are 2017 mutually external circles drawn on a blackboard, such that no two are tangent and no three share a common tangent. A tangent segment is a line segment that is a common tangent to two circles, starting at one tangent point and ending at the other one. Luciano is drawing tangent segments on the blackboard, one at a time, so that no tangent segment intersects any other circles or previously drawn tangent segments. Luciano keeps drawing tangent segments until no more can be drawn. Find all possible numbers of tangent segments when he stops drawing. (Australia)
```

### isl/2019/a3

Paper:

```text
Let n ě 3 be a positive integer and let pa1 , a2 , . . . , an q be a strictly increasing sequence of n positive real numbers with sum equal to 2. Let X be a subset of t1, 2, . . . , nu such that the value of ˇ ˇ ˇ ÿ ˇ ˇ ˇ ˇ1 ´ ai ˇ ˇ iPX ˇ is minimised. Prove that there exists a strictly increasing sequence of n positive real numbers pb1 , b2 , . . . , bn q with sum equal to 2 such that ÿ bi “ 1. iPX
```

Canonical text:

```text
Let $n \geqslant 3$ be a positive integer and let $\left(a_{1}, a_{2}, \ldots, a_{n}\right)$ be a strictly increasing sequence of $n$ positive real numbers with sum equal to 2 . Let $X$ be a subset of $\{1,2, \ldots, n\}$ such that the value of $$ \left|1-\sum_{i \in X} a_{i}\right| $$ is minimised. Prove that there exists a strictly increasing sequence of $n$ positive real numbers $\left(b_{1}, b_{2}, \ldots, b_{n}\right)$ with sum equal to 2 such that $$ \sum_{i \in X} b_{i}=1 $$ (New Zealand) Common remarks. In all solutions, we say an index set $X$ is $\left(a_{i}\right)$-minimising if it has the property in the problem for the given sequence $\left(a_{i}\right)$. Write $X^{c}$ for the complement of $X$, and $[a, b]$ for the interval of integers $k$ such that $a \leqslant k \leqslant b$. Note that $$ \left|1-\sum_{i \in X} a_{i}\right|=\left|1-\sum_{i \in X^{c}} a_{i}\right|, $$ so we may exchange $X$ and $X^{c}$ where convenient. Let $$ \Delta=\sum_{i \in X^{c}} a_{i}-\sum_{i \in X} a_{i} $$ and note that $X$ is $\left(a_{i}\right)$-minimising if and only if it minimises $|\Delta|$, and that $\sum_{i \in X} a_{i}=1$ if and only if $\Delta=0$. In some solutions, a scaling process is used. If we have a strictly increasing sequence of positive real numbers $c_{i}$ (typically obtained by perturbing the $a_{i}$ in some way) such that $$ \sum_{i \in X} c_{i}=\sum_{i \in X^{c}} c_{i} $$ then we may put $b_{i}=2 c_{i} / \sum_{j=1}^{n} c_{j}$. So it suffices to construct such a sequence without needing its sum to be 2 . The solutions below show various possible approaches to the problem. Solutions 1 and 2 perturb a few of the $a_{i}$ to form the $b_{i}$ (with scaling in the case of Solution 1, without scaling in the case of Solution 2). Solutions 3 and 4 look at properties of the index set $X$. Solution 3 then perturbs many of the $a_{i}$ to form the $b_{i}$, together with scaling. Rather than using such perturbations, Solution 4 constructs a sequence $\left(b_{i}\right)$ directly from the set $X$ with the required properties. Solution 4 can be used to give a complete description of sets $X$ that are $\left(a_{i}\right)$-minimising for some $\left(a_{i}\right)$.
```

### isl/2019/a5

Paper:

```text
Let x1 , x2 , . . . , xn be diﬀerent real numbers. Prove that # ÿ ź 1 ´ xi xj 0, if n is even; “ 1ďiďn j‰i xi ´ xj 1, if n is odd. (Kazakhstan) Shortlisted problems 5
```

Canonical text:

```text
Let $x_{1}, x_{2}, \ldots, x_{n}$ be different real numbers. Prove that $$ \sum_{1 \leqslant i \leqslant n} \prod_{j \neq i} \frac{1-x_{i} x_{j}}{x_{i}-x_{j}}= \begin{cases}0, & \text { if } n \text { is even } \\ 1, & \text { if } n \text { is odd }\end{cases} $$
```

### isl/2020/a6

Paper:

```text
Determine all functions f : Z Ñ Z such that 2 2 f a `b pa ` bq “ af paq ` bf pbq for every a, b P Z. Here, f n denotes the nth iteration of f , i.e., f 0 pxq “ x and f n`1pxq “ f pf n pxqq for all n ě 0. Shortlisted problems 5
```

Canonical text:

```text
Determine all functions $f: \mathbb{Z} \rightarrow \mathbb{Z}$ such that $$ f^{a^{2}+b^{2}}(a+b)=a f(a)+b f(b) \text { for every } a, b \in \mathbb{Z} $$ Here, $f^{n}$ denotes the $n^{\text {th }}$ iteration of $f$, i.e., $f^{0}(x)=x$ and $f^{n+1}(x)=f\left(f^{n}(x)\right)$ for all $n \geqslant 0$.
```

### isl/2021/c6

Paper:

```text
A hunter and an invisible rabbit play a game on an infinite square grid. First the hunter fixes a colouring of the cells with finitely many colours. The rabbit then secretly chooses a cell to start in. Every minute, the rabbit reports the colour of its current cell to the hunter, and then secretly moves to an adjacent cell that it has not visited before (two cells are adjacent if they share a side). The hunter wins if after some finite time either • the rabbit cannot move; or • the hunter can determine the cell in which the rabbit started. Decide whether there exists a winning strategy for the hunter. Shortlisted problems 7
```

Canonical text:

```text
A hunter and an invisible rabbit play a game on an infinite square grid. First the hunter fixes a colouring of the cells with finitely many colours. The rabbit then secretly chooses a cell to start in. Every minute, the rabbit reports the colour of its current cell to the hunter, and then secretly moves to an adjacent cell that it has not visited before (two cells are adjacent if they share a side). The hunter wins if after some finite time either - the rabbit cannot move; or - the hunter can determine the cell in which the rabbit started. Decide whether there exists a winning strategy for the hunter.
```

### isl/2023/c2

Paper:

```text
Determine the maximal length L of a sequence a1 , . . . , aL of positive integers satisfying both the following properties: • every term in the sequence is less than or equal to 22023 , and • there does not exist a consecutive subsequence ai , ai`1 , . . . , aj (where 1 ď i ď j ď L) with a choice of signs si , si`1 , . . . , sj P t1, ´1u for which si ai ` si`1 ai`1 ` ¨ ¨ ¨ ` sj aj “ 0.
```

Canonical text:

```text
Determine the maximal length $L$ of a sequence $a_{1}, \ldots, a_{L}$ of positive integers satisfying both the following properties: - every term in the sequence is less than or equal to $2^{2023}$, and - there does not exist a consecutive subsequence $a_{i}, a_{i+1}, \ldots, a_{j}$ (where $1 \leqslant i \leqslant j \leqslant L$ ) with a choice of signs $s_{i}, s_{i+1}, \ldots, s_{j} \in\{1,-1\}$ for which $$ s_{i} a_{i}+s_{i+1} a_{i+1}+\cdots+s_{j} a_{j}=0 $$ (Czech Republic)
```

### isl/2023/c7

Paper:

```text
The Imomi archipelago consists of n ě 2 islands. Between each pair of distinct islands is a unique ferry line that runs in both directions, and each ferry line is operated by one of k companies. It is known that if any one of the k companies closes all its ferry lines, then it becomes impossible for a traveller, no matter where the traveller starts at, to visit all the islands exactly once (in particular, not returning to the island the traveller started at). Determine the maximal possible value of k in terms of n. Shortlisted problems 7
```

Canonical text:

```text
The Imomi archipelago consists of $n \geqslant 2$ islands. Between each pair of distinct islands is a unique ferry line that runs in both directions, and each ferry line is operated by one of $k$ companies. It is known that if any one of the $k$ companies closes all its ferry lines, then it becomes impossible for a traveller, no matter where the traveller starts at, to visit all the islands exactly once (in particular, not returning to the island the traveller started at). Determine the maximal possible value of $k$ in terms of $n$. (Ukraine)
```
