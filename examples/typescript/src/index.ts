// This is largely for testing, but import what we need
import {
  AwilixContainer,
  createContainer,
  asClass,
  InjectionMode
} from '../../../src/awilix'
import TestService from './services/TestService'
import DependentService from './services/DependentService'

// Create the container
const container: AwilixContainer = createContainer({
  injectionMode: InjectionMode.CLASSIC
})

// Register the classes
container.register({
  testService: asClass(TestService),
  depService: asClass(DependentService).classic()
})

// Resolve a dependency
let dep: DependentService = container.cradle.depService

// Test that all is well, should produce 'Hello world!'
console.log(dep.getInnerData())
