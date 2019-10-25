<?php
	if(isset($_GET['continent'])){
		$continent=$_GET['continent'];
		$country=$_GET['country'];
		$ile=$_GET['ile'];
		$conn=new mysqli("localhost","id11347156_safearthh","jD9ajF-yvC93k","id11347156_data");
		if($conn->connect_error){
			echo "Connection failed: ".$conn->connect_error;
		}
		$sql="SELECT kraje.Populacja, kraje.Wygenerowane_odpady_tony FROM kraje LEFT JOIN kontynenty ON kraje.ID_Kontynentu=kontynenty.ID_Kontynentu WHERE kontynenty.Kontynent='Europa' AND kraje.Nazwa_kraju='Polska'";
		$result=$conn->query($sql);
		$row=$result->fetch_assoc();
		echo(($row['Wygenerowane_odpady_tony']/$row['Populacja'])*$ile);
	}
?>
