附录1：
clear all;
%读取彩色图像
I=imread('e:\4.bmp');
M =I;
%读取图像尺寸
[N,L]= size(I);
n = 0;
%设定ARNOLD变换的次数，对64x64的图像周期是48
Frequency=48
for step=1:3     %对图像的RGB三维矩阵分别做等次ARNOLD变换
   for s = 1:Frequency
       for i = 1:N
               for j = 1:N
                   M(mod(i+j-2,N)+1,mod(i+2*j-3,N)+1,step) = I(i,j,step);
               end
       end
       I=M;
   end
end
%显示变换后的图像
imshow(M);

附录2：

clear all;
%读取64×64的图像
Image=imread('e:\4.bmp');
[m,n,z]=size(Image);
A=zeros(m,n,3);
B=zeros(m,n,3);
%产生幻方矩阵a
a=magic(n);
%提取幻方矩阵的升序排列索引
[i,j,v]=find(a);
i=i';
j=j';
v=v';
%index为E的索引。E就是v的升序向量
[E,index]=sort(v); 
%整理行列号
for t=1:n^2
    y1(t)=i(index(t));
    y2(t)=j(index(t));
end
%变换次数设定，n^2＝4096就是幻方变换的周期
frequency=n^2
%下面分别对RGB三维矩阵分别做幻方变换
for step=1:3
A(:,:,step)=Image(:,:,step);
C=A(:,:,step);
for N=1:frequency      
    for t=1:m^2-1; 
       B(y1(t+1),y2(t+1),step)=A(y1(t),y2(t),step);
    end
    B(y1(1),y2(1),step)=A(y1(m^2),y2(n^2),step);
    A(:,:,step)=B(:,:,step);
end
end
%显示幻方变换结果
imshow(B,[]);

附录3：
clear all;
%读取彩色图像
J=imread('e:\4.bmp');
X=J;
for step=1:3
%读取图像尺寸
%做DCT变换
ori=dct2(J(:,:,step));
M(:,:,step) =ori;
I(:,:,step)=ori;
%读取图像尺寸
[N,L]= size(I(:,:,step));
n = 0;
%设定ARNOLD变换的次数，对64x64的图像周期是48
Frequency=48
for s = 1:Frequency
       for i = 1:N
               for j = 1:N
                   M(mod(i+j-2,N)+1,mod(i+2*j-3,N)+1,step) = I(i,j,step);
               end
       end
       I(:,:,step)=M(:,:,step);
end
%对矩阵进行逆DCT变换
X(:,:,step)=idct2(M(:,:,step));
end
%显示变换后的图像
imshow(X);

附录4：
clear all;
%读取64×64的图像
Image=imread('e:\4.bmp');
X=Image;
%变换次数设定，n^2就是幻方变换的周期，下面可以确定n
frequency=1024
%下面分别对RGB三维矩阵分别做幻方变换
for step=1:3
[A(:,:,step),LH,LV,HH]=dwt2(Image(:,:,step),'haar');
%只用产生幻方一次就可以了
  if step==1
[m,n,z]=size(A);
%产生幻方矩阵a
a=magic(n);
%提取幻方矩阵的升序排列索引
[i,j,v]=find(a);
i=i';
j=j';
v=v';
%index为E的索引。E就是v的升序向量
[E,index]=sort(v); 
%整理行列号
for t=1:n^2
    y1(t)=i(index(t));
    y2(t)=j(index(t));
end
  end
for N=1:frequency      
    for t=1:m^2-1; 
       B(y1(t+1),y2(t+1),step)=A(y1(t),y2(t),step);
    end
    B(y1(1),y2(1),step)=A(y1(m^2),y2(n^2),step);
    A(:,:,step)=B(:,:,step);
end
X(:,:,step)=idwt2(B(:,:,step),LH,LV,HH,'haar');
end
%显示幻方变换结果
imshow(X);

