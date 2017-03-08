task AfterInstallDep -After InstallDep {
    Install-BowerDependencies -Path .
}
task AfterSetVetsion -After SetVersion {
    Set-BowerVersion -Path . -Version $Version
}