task PreInstallDep -Before InstallDep {
    Install-BowerDependencies -Path .
}